import React, { useRef } from 'react';
import { useMouseScrub } from '../../hooks/useMouseScrub';

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4';

export const HeroVideo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrubReady } = useMouseScrub(canvasRef, videoRef, VIDEO_SRC, 60);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      {/*
        Video: visible immediately. Fades out when canvas scrubbing is ready.
        If CORS blocks canvas, this stays visible permanently — no broken state.
      */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        className="absolute inset-0 object-cover w-full h-full transition-opacity duration-700"
        style={{ opacity: scrubReady ? 0 : 0.6 }}
        autoPlay
        muted
        playsInline
      />

      {/*
        Canvas: hidden until scrubbing is ready. Fades in over the video.
        Only shown if CORS extraction succeeded.
      */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full transition-opacity duration-700"
        style={{ objectFit: 'cover', opacity: scrubReady ? 0.6 : 0 }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary" />
    </div>
  );
};
