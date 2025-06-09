import * as React from "react";
import { Bus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SplashScreenProps {
  appName?: string;
  onTap?: () => void;
  autoAdvance?: boolean;
  delay?: number;
  className?: string;
}

const SplashScreen = React.forwardRef<HTMLDivElement, SplashScreenProps>(
  (
    {
      appName = "Buscomfy+",
      onTap,
      autoAdvance = false,
      delay = 3000,
      className,
      ...props
    },
    ref,
  ) => {
    React.useEffect(() => {
      if (autoAdvance && onTap) {
        const timer = setTimeout(() => {
          onTap();
        }, delay);

        return () => clearTimeout(timer);
      }
    }, [autoAdvance, onTap, delay]);

    return (
      <div
        ref={ref}
        onClick={onTap}
        className={cn(
          "relative flex h-[550px] w-full max-w-md mx-auto flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 font-inter cursor-pointer",
          className,
        )}
        {...props}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F7960F] to-[#FF8C00]" />

        {/* Logo Container */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Clean App Icon Style */}
          <div className="mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-[20px] flex items-center justify-center shadow-lg relative">
              {/* Location pin with bus */}
              <svg
                className="w-14 h-16"
                viewBox="0 0 60 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Location pin shape */}
                <path
                  d="M30 0C13.5 0 0 13.5 0 30C0 52.5 30 72 30 72C30 72 60 52.5 60 30C60 13.5 46.5 0 30 0Z"
                  fill="white"
                />
                {/* Simple clean bus icon */}
                <g transform="translate(30, 22)">
                  {/* Bus top section */}
                  <rect
                    x="-8"
                    y="-6"
                    width="16"
                    height="3"
                    rx="1.5"
                    fill="#EF940E"
                  />
                  {/* Bus main body */}
                  <rect
                    x="-10"
                    y="-3"
                    width="20"
                    height="8"
                    rx="1"
                    fill="#EF940E"
                  />
                  {/* Two white circular windows */}
                  <circle cx="-4" cy="1" r="2" fill="white" />
                  <circle cx="4" cy="1" r="2" fill="white" />
                  {/* Side details */}
                  <rect
                    x="-12"
                    y="-4"
                    width="1"
                    height="4"
                    rx="0.5"
                    fill="#EF940E"
                  />
                  <rect
                    x="11"
                    y="-4"
                    width="1"
                    height="4"
                    rx="0.5"
                    fill="#EF940E"
                  />
                  {/* Bottom section */}
                  <rect
                    x="-2"
                    y="5"
                    width="4"
                    height="1.5"
                    rx="0.75"
                    fill="#EF940E"
                  />
                </g>
              </svg>
            </div>
          </div>
          {/* App Name */}
          <h1 className="text-2xl font-bold text-white tracking-wide">
            {appName}
          </h1>
        </div>

        {/* Tap hint for manual advance */}
        {!autoAdvance && onTap && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <p className="text-white/80 text-xs font-medium">Tap to continue</p>
          </div>
        )}
      </div>
    );
  },
);

SplashScreen.displayName = "SplashScreen";

export { SplashScreen };
