import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none overflow-hidden opacity-40",
        className
      )}
    >
      <svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M-100,0 Q300,400 900,0 T1900,600"
          fill="none"
          stroke="url(#beamGrad)"
          strokeWidth="2"
          className="animate-pulse"
        />
        <path
          d="M0,200 Q500,-100 1100,500 T2100,100"
          fill="none"
          stroke="url(#beamGrad)"
          strokeWidth="1.5"
          className="animate-pulse"
        />
      </svg>
    </div>
  );
};
