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
          "relative flex h-screen w-full max-w-md mx-auto flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 font-inter",
          className,
        )}
        {...props}
      >
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F7960F] to-[#FF8C00]" />

        {/* Skip Button */}
        {showSkip && (
          <div className="relative z-10 flex justify-end p-6 pt-16">
            <Button
              variant="ghost"
              onClick={onSkip}
              className="flex items-center gap-2 text-white hover:bg-white/10 transition-colors"
            >
              <span className="text-lg font-semibold">Skip</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Content Area */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
          {/* Title */}
          <h1 className="mb-6 text-3xl font-semibold leading-tight text-white">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-lg font-medium leading-relaxed text-white/90 max-w-sm">
            {subtitle}
          </p>
        </div>

        {/* Continue Button */}
        <div className="relative z-10 p-6 pb-8">
          <Button
            onClick={onContinue}
            className="w-full bg-white text-orange-500 hover:bg-white/95 rounded-full py-6 text-base font-medium transition-all"
            size="lg"
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
