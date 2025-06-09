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
          {/* Location Pin with Figma Bus Design */}
          <div className="mb-6">
            <svg
              className="w-20 h-24 drop-shadow-lg"
              viewBox="0 0 80 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Location pin shape */}
              <path
                d="M40 0C18 0 0 18 0 40C0 62 40 96 40 96C40 96 80 62 80 40C80 18 62 0 40 0Z"
                fill="white"
              />
              {/* Figma bus design */}
              <g transform="translate(40, 28)">
                {/* Bus top curved section */}
                <rect
                  x="-12"
                  y="-8"
                  width="24"
                  height="6"
                  rx="3"
                  fill="#F97316"
                />
                {/* Bus main body */}
                <rect
                  x="-14"
                  y="-2"
                  width="28"
                  height="12"
                  rx="2"
                  fill="#F97316"
                />
                {/* Bus headlights/windows (two white circles) */}
                <circle cx="-6" cy="2" r="3" fill="white" />
                <circle cx="6" cy="2" r="3" fill="white" />
                {/* Small detail elements on sides */}
                <rect
                  x="-16"
                  y="-6"
                  width="2"
                  height="4"
                  rx="1"
                  fill="#F97316"
                />
                <rect
                  x="14"
                  y="-6"
                  width="2"
                  height="4"
                  rx="1"
                  fill="#F97316"
                />
              </g>
            </svg>
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
