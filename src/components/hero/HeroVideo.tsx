import React, { useRef } from 'react';
import { useMouseScrub } from '../../hooks/useMouseScrub';

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4';

export const HeroVideo: React.FC = () => {
  // We no longer need a canvas because we scrub the video directly!
  const videoRef = useRef<HTMLVideoElement>(null);

  // Still call the hook to bind the mouse events to the video element
  useMouseScrub(null as any, videoRef, VIDEO_SRC);

  return (
    <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        className="absolute inset-0 object-cover w-full h-full opacity-60"
        autoPlay
        muted
        playsInline
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary" />
    </div>
  );
};
