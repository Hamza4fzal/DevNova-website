import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

export function useMouseScrub(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  videoRef: RefObject<HTMLVideoElement | null>,
  videoSrc: string,
  totalFrames = 60
) {
  const [scrubReady, setScrubReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let destroyed = false;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    // Mobile: skip scrubbing entirely
    if (isMobile) return;

    const setupScrubbing = () => {
      if (destroyed) return;
      setScrubReady(true);

      const onMove = (e: MouseEvent) => {
        if (destroyed || !video.duration) return;
        
        // Calculate target time based on mouse X position
        const percentage = Math.max(0, Math.min(1, e.clientX / window.innerWidth));
        const targetTime = percentage * video.duration;
        
        // Direct video scrubbing — modern browsers handle this instantly 
        // without the heavy canvas extraction overhead
        video.currentTime = targetTime;
      };

      window.addEventListener('mousemove', onMove);
      return () => window.removeEventListener('mousemove', onMove);
    };

    // We wait for the video to finish its initial animation (turn face once)
    // before taking over the mouse. This fulfills "play once then scrub".
    // Since there is no canvas extraction, it's instantly ready when the video ends!
    video.addEventListener('ended', setupScrubbing);

    return () => {
      destroyed = true;
      video.removeEventListener('ended', setupScrubbing);
    };
  }, [videoSrc]);

  return { scrubReady };
}
