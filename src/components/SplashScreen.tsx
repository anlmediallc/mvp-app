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
          {/* Simple Circle Logo with Bus Icon */}
          <div className="mb-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-10 h-10 text-orange-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 6h16v10H4zm2 2v6h12V8H6zm1 1h2v2H7V9zm3 0h2v2h-2V9zm3 0h2v2h-2V9zm3 0h2v2h-2V9zM7 12h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2z" />
                <circle cx="7" cy="18" r="2" />
                <circle cx="17" cy="18" r="2" />
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
