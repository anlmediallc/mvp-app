import * as React from "react";
import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface VerificationFormProps {
  email?: string;
  onVerify?: (code: string) => void;
  onResendCode?: () => void;
  codeError?: string;
  isLoading?: boolean;
  resendCooldown?: number;
  className?: string;
}

const VerificationForm = React.forwardRef<
  HTMLDivElement,
  VerificationFormProps
>(
  (
    {
      email = "johndoe@gmail.com",
      onVerify,
      onResendCode,
      codeError,
      isLoading = false,
      resendCooldown = 60,
      className,
      ...props
    },
    ref,
  ) => {
    const [code, setCode] = useState("");
    const [timeLeft, setTimeLeft] = useState(resendCooldown);
    const [canResend, setCanResend] = useState(false);

    useEffect(() => {
      if (timeLeft > 0) {
        const timer = setTimeout(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        setCanResend(true);
      }
    }, [timeLeft]);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (onVerify && code) {
        onVerify(code);
      }
    };

    const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, "").slice(0, 4);
      setCode(value);
    };

    const handleResend = () => {
      if (canResend && onResendCode) {
        onResendCode();
        setTimeLeft(resendCooldown);
        setCanResend(false);
      }
    };

    const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-md mx-auto bg-white rounded-3xl p-6 shadow-lg font-inter",
          className,
        )}
        style={{
          backgroundImage: "url(/form-bg.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // Mobile responsive background from Builder.io
          ...(window.innerWidth <= 640 && {
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2F47bedcd915494a2c9d8c3faf11622396%2F3e3b118899d545fe8107825676bfdf48)",
          }),
        }}
        {...props}
      >
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8 sm:mt-0 max-sm:mt-7">
          Verify Account
        </h1>

        {/* Description */}
        <div className="text-center mb-6">
          <p className="text-gray-600 text-sm">
            We've sent a verification code to
          </p>
          <p className="text-gray-800 font-medium">{email}</p>
        </div>

        {/* Verification Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Code Input */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700">Enter Code</div>
            <Input
              type="text"
              placeholder="1234"
              value={code}
              onChange={handleCodeChange}
              maxLength={4}
              className={cn(
                "h-12 rounded-xl border-gray-300 text-base text-center text-2xl font-mono tracking-widest",
                codeError && "border-red-500 focus:border-red-500",
              )}
              required
            />
            {codeError && (
              <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                <AlertCircle className="h-4 w-4" />
                <span>{codeError}</span>
              </div>
            )}
          </div>

          {/* Resend Code */}
          <div className="text-center max-sm:mt-1">
            {canResend ? (
              <button
                type="button"
                onClick={handleResend}
                className="text-orange-500 text-sm font-medium underline hover:text-orange-600 focus:outline-none"
              >
                Resend Code
              </button>
            ) : (
              <p className="text-gray-500 text-sm">
                Resend code in {formatTime(timeLeft)}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading || code.length !== 4}
            className="w-full h-12 bg-gradient-to-r from-[#F7960F] to-[#FF8C00] hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-xl text-base disabled:opacity-50 mt-12"
          >
            {isLoading ? "Verifying..." : "Verify Account"}
          </Button>
        </form>

        {/* Back to Login */}
        <div className="mt-8 text-center">
          <span className="text-gray-600 text-sm">
            Want to try a different email?{" "}
          </span>
          <button
            type="button"
            className="text-orange-500 text-sm font-medium underline hover:text-orange-600 focus:outline-none"
          >
            Change Email
          </button>
        </div>
      </div>
    );
  },
);

VerificationForm.displayName = "VerificationForm";

export { VerificationForm };
