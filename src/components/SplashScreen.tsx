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
      <>
        {/* Custom CSS for responsive background */}
        <style jsx>{`
          .splash-background {
            background: linear-gradient(to bottom right, #f7960f, #ff8c00);
          }

          @media (max-width: 991px) {
            .splash-background {
              background-image: url("https://cdn.builder.io/api/v1/image/assets%2F47bedcd915494a2c9d8c3faf11622396%2Fa353560963de4121ab0b9d86f096f4db");
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
            }
          }
        `}</style>

        <div
          ref={ref}
          onClick={onTap}
          className={cn(
            "relative flex h-[550px] w-full max-w-md mx-auto flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 font-inter cursor-pointer",
            className,
          )}
          {...props}
        >
          {/* Background with responsive behavior */}
          <div className="absolute inset-0 splash-background" />

          {/* Tap hint for manual advance */}
          {!autoAdvance && onTap && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <p className="text-white/80 text-xs font-medium">
                Tap to continue
              </p>
            </div>
          )}
        </div>
      </>
    );
  },
);

SplashScreen.displayName = "SplashScreen";

export { SplashScreen };
