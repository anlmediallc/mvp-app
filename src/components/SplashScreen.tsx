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
          {/* New gradient container with bus icon */}
          <div
            className="mb-6 flex items-center justify-center"
            style={{
              width: "158px",
              height: "158px",
              background:
                "linear-gradient(135deg, #F59E0B 0%, #EF940E 50%, #D97706 100%)",
              borderRadius: "32px",
              boxShadow:
                "0 8px 32px rgba(239,148,14,0.3), 0 4px 16px rgba(239,148,14,0.2)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <svg
              width="118"
              height="118"
              viewBox="0 0 118 118"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="app-icon"
              style={{
                width: "118px",
                height: "118px",
                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.1))",
              }}
            >
              {/* Bus body background */}
              <rect
                x="20"
                y="30"
                width="78"
                height="58"
                rx="8"
                fill="#EF940E"
              />

              {/* Bus roof */}
              <rect
                x="30"
                y="20"
                width="58"
                height="15"
                rx="6"
                fill="#EF940E"
              />

              {/* Roof stripe */}
              <rect x="38" y="15" width="42" height="8" rx="4" fill="#EF940E" />

              {/* Windshield */}
              <rect x="32" y="35" width="54" height="25" rx="4" fill="white" />

              {/* Front door */}
              <rect x="22" y="40" width="8" height="20" rx="2" fill="white" />

              {/* Back door */}
              <rect x="88" y="40" width="8" height="20" rx="2" fill="white" />

              {/* Headlights */}
              <circle cx="35" cy="75" r="6" fill="white" />
              <circle cx="83" cy="75" r="6" fill="white" />

              {/* Wheels */}
              <circle cx="35" cy="95" r="8" fill="#333" />
              <circle cx="83" cy="95" r="8" fill="#333" />
              <circle cx="35" cy="95" r="5" fill="#666" />
              <circle cx="83" cy="95" r="5" fill="#666" />

              {/* Side mirrors */}
              <rect x="15" y="45" width="5" height="8" rx="2" fill="#EF940E" />
              <rect x="98" y="45" width="5" height="8" rx="2" fill="#EF940E" />
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
