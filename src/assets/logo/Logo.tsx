import React from "react";
import { cn } from "../../utils/cn";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("font-bold text-2xl tracking-tight flex items-center gap-3 select-none", className)}>
      <img src="/logo.png" alt="DevNova Logo" className="w-10 h-10 object-contain" />
      <div className="flex items-center">
        <span>DevNova</span>
        <span className="text-sm font-medium opacity-50 relative -top-2 -left-1">®</span>
      </div>
    </div>
  );
};
