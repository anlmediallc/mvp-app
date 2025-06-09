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
          {/* Direct Bus Icon from Figma */}
          <div
            className="mb-6"
            style={{
              "@media (max-width: 640px)": {
                marginBottom: "1px",
              },
            }}
          >
            <svg
              width="119"
              height="118"
              viewBox="0 0 119 118"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-32 h-32"
              style={{
                "@media (max-width: 640px)": {
                  color: "rgba(255, 255, 255, 1)",
                  border: "1px solid rgba(0, 2, 7, 0)",
                },
              }}
            >
              {/* Orange bus body - simplified outer shape */}
              <path
                d="M22.7768 0.631491C18.8762 1.35801 17.6805 1.7372 14.9474 3.11375C8.45048 6.38555 3.50073 12.8281 1.71857 20.3316L0.978027 23.4504V59.0707V94.6909L1.71725 97.7933C4.13149 107.923 11.2641 114.959 21.4703 117.279C24.6323 117.997 24.7706 118 59.978 118H95.3123L98.5992 117.264C108.585 115.028 115.957 107.655 118.236 97.6259L118.978 94.3626V59.0707C118.978 23.8217 118.977 23.7748 118.25 20.5818C116.695 13.7486 113.201 8.54838 107.53 4.62523C104.754 2.70534 101.371 1.41251 97.1198 0.648234C93.5137 -0.000481452 92.2663 -0.0218198 59.674 0.00805526C28.6466 0.0366171 25.7048 0.0861894 22.7768 0.631491Z"
                fill="#EF940E"
                style={{
                  "@media (max-width: 640px)": {
                    backgroundColor: "rgba(255, 255, 255, 1)",
                  },
                }}
              />

              {/* White windows and details on top */}
              <rect x="60" y="35" width="15" height="4" rx="1" fill="white" />
              <rect x="40" y="45" width="8" height="6" rx="1" fill="white" />
              <rect x="50" y="45" width="8" height="6" rx="1" fill="white" />
              <rect x="62" y="45" width="8" height="6" rx="1" fill="white" />
              <rect x="72" y="45" width="8" height="6" rx="1" fill="white" />
              <rect x="43" y="55" width="33" height="8" rx="1" fill="white" />
              <circle cx="49" cy="67" r="3" fill="white" />
              <circle cx="71" cy="67" r="3" fill="white" />
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
