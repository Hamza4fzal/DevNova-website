import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';

/**
 * Progressive enhancement approach:
 * 1. Video autoplays immediately — users always see content
 * 2. Frame extraction runs silently in the background
 * 3. If it succeeds → canvas scrubbing activates (60fps)
 * 4. If CORS/extraction fails → video keeps autoplaying normally
 */
export function useMouseScrub(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  videoRef: RefObject<HTMLVideoElement | null>,
  videoSrc: string,
  totalFrames = 60
) {
  const [scrubReady, setScrubReady] = useState(false);
  const framesRef = useRef<ImageBitmap[]>([]);
  const rafRef = useRef<number>(0);
  const targetRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let destroyed = false;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    // Mobile: just let the video autoplay, skip canvas entirely
    if (isMobile) return;

    const offscreen = document.createElement('video');
    offscreen.src = videoSrc;
    offscreen.crossOrigin = 'anonymous';
    offscreen.muted = true;
    offscreen.playsInline = true;
    offscreen.preload = 'auto';

    const extract = async () => {
      // Wait for metadata
      await new Promise<void>((res, rej) => {
        const onMeta = () => { cleanup(); res(); };
        const onErr = () => { cleanup(); rej(); };
        const cleanup = () => {
          offscreen.removeEventListener('loadedmetadata', onMeta);
          offscreen.removeEventListener('error', onErr);
        };
        offscreen.addEventListener('loadedmetadata', onMeta);
        offscreen.addEventListener('error', onErr);
        offscreen.load();
      });

      const { duration, videoWidth, videoHeight } = offscreen;
      if (!duration || !videoWidth) return;

      canvas.width = videoWidth;
      canvas.height = videoHeight;

      const interval = duration / totalFrames;
      const frames: ImageBitmap[] = [];

      for (let i = 0; i < totalFrames; i++) {
        if (destroyed) return;

        // ⚠️ Add listener BEFORE setting currentTime to avoid race condition
        await new Promise<void>((res) => {
          const onSeeked = () => res();
          offscreen.addEventListener('seeked', onSeeked, { once: true });
          offscreen.currentTime = i * interval;
        });

        if (destroyed) return;
        try {
          const bmp = await createImageBitmap(offscreen);
          frames.push(bmp);
        } catch {
          // CORS or decode error — abort canvas approach, keep video playing
          return;
        }
      }

      if (destroyed || frames.length < totalFrames * 0.9) return; // need 90% of frames

      framesRef.current = frames;

      // Draw frame 0 to canvas before showing it
      ctx.drawImage(frames[0], 0, 0, canvas.width, canvas.height);

      // Show canvas, hide video
      setScrubReady(true);

      // 60fps draw loop
      let lastIdx = -1;
      const loop = () => {
        if (destroyed) return;
        const idx = Math.min(Math.round(targetRef.current), frames.length - 1);
        if (idx !== lastIdx) {
          ctx.drawImage(frames[idx], 0, 0, canvas.width, canvas.height);
          lastIdx = idx;
        }
        rafRef.current = requestAnimationFrame(loop);
      };
      rafRef.current = requestAnimationFrame(loop);

      const onMove = (e: MouseEvent) => {
        targetRef.current = (e.clientX / window.innerWidth) * (frames.length - 1);
      };
      window.addEventListener('mousemove', onMove);
      return () => window.removeEventListener('mousemove', onMove);
    };

    let innerCleanup: (() => void) | undefined;
    extract()
      .then((fn) => { innerCleanup = fn; })
      .catch(() => { /* CORS failed — video keeps autoplaying, no crash */ });

    return () => {
      destroyed = true;
      cancelAnimationFrame(rafRef.current);
      innerCleanup?.();
      framesRef.current.forEach((b) => b.close());
      framesRef.current = [];
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoSrc, totalFrames]);

  return { scrubReady };
}
