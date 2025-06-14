import * as React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface OnboardingScreenProps {
  title: string;
  subtitle: string;
  onSkip?: () => void;
  onContinue?: () => void;
  showSkip?: boolean;
  className?: string;
}

const OnboardingScreen = React.forwardRef<
  HTMLDivElement,
  OnboardingScreenProps
>(
  (
    {
      title,
      subtitle,
      onSkip,
      onContinue,
      showSkip = true,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex h-[580px] w-full max-w-md mx-auto flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 font-inter",
          className,
        )}
        {...props}
      >
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F7960F] to-[#FF8C00]" />

        {/* Skip Button */}
        {showSkip && (
          <div
            className="relative z-10 flex justify-end p-6 pt-16"
            style={{
              ...(window.innerWidth <= 640 && {
                backgroundColor: "#ef940e",
                margin: "-13px 0 -3px",
              }),
            }}
          >
            <Button
              variant="ghost"
              onClick={onSkip}
              className="flex items-center gap-2 text-white hover:bg-white/10 transition-colors"
              style={{
                ...(window.innerWidth <= 640 && {
                  marginTop: "-55px",
                  justifyContent: "center",
                  alignItems: "center",
                }),
              }}
            >
              <span className="text-lg font-semibold">Skip</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Content Area */}
        <div
          className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center"
          style={{
            ...(window.innerWidth <= 640 && {
              backgroundImage:
                "url(https://cdn.builder.io/api/v1/image/assets%2F47bedcd915494a2c9d8c3faf11622396%2Fdf199ffe446d4284879a84f8216f4d2e)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              margin: "-5px 0",
            }),
          }}
        >
          {/* Title */}
          <h1
            className="mb-3 text-xl font-semibold leading-tight text-white"
            style={{
              ...(window.innerWidth <= 640 && {
                marginTop: "-364px",
              }),
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mb-4 text-sm font-medium leading-tight text-white/90 max-w-xs">
            {subtitle}
          </p>
        </div>
        {/* Continue Button */}
        <div className="relative z-10 p-4 pb-6">
          <Button
            onClick={onContinue}
            className="w-full bg-white text-orange-500 hover:bg-white/95 rounded-full py-3 text-sm font-medium transition-all"
            size="sm"
          >
            Continue
          </Button>
        </div>
      </div>
    );
  },
);

OnboardingScreen.displayName = "OnboardingScreen";

export { OnboardingScreen };
