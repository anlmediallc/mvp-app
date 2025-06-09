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
      if (onVerify && code.length === 4) {
        onVerify(code);
      }
    };

    const handleResend = () => {
      if (canResend && onResendCode) {
        onResendCode();
        setTimeLeft(resendCooldown);
        setCanResend(false);
      }
    };

    const formatTime = (seconds: number) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
    };

    const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, "").slice(0, 4);
      setCode(value);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-md mx-auto bg-white rounded-3xl p-8 shadow-lg font-inter",
          className,
        )}
        {...props}
      >
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Verify Account
        </h1>

        {/* Description */}
        <div className="text-center mb-8 space-y-2">
          <p className="text-gray-600">
            Code has been send to{" "}
            <span className="font-semibold text-gray-800">{email}</span>.
          </p>
          <p className="text-gray-600">
            Enter the code to verify your account.
          </p>
        </div>

        {/* Verification Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Code Input */}
          <div className="space-y-2">
            <label htmlFor="code" className="text-sm font-medium text-gray-700">
              Enter Code
            </label>
            <Input
              id="code"
              type="text"
              placeholder="4 Digit Code"
              value={code}
              onChange={handleCodeChange}
              className={cn(
                "h-12 text-base rounded-xl focus:ring-orange-500 text-center tracking-widest",
                codeError
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-200 focus:border-orange-500",
              )}
              maxLength={4}
              required
            />
            {codeError && (
              <div className="flex items-center gap-2 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>{codeError}</span>
              </div>
            )}
          </div>

          {/* Resend Section */}
          <div className="text-center space-y-2">
            <div className="text-gray-600">
              <span>Didn't Receive Code? </span>
              <button
                type="button"
                onClick={handleResend}
                disabled={!canResend}
                className={cn(
                  "font-medium underline",
                  canResend
                    ? "text-orange-500 hover:text-orange-600 cursor-pointer"
                    : "text-gray-400 cursor-not-allowed",
                )}
              >
                Resend Code
              </button>
            </div>

            {!canResend && (
              <p className="text-gray-500 text-sm">
                Resend code in {formatTime(timeLeft)}
              </p>
            )}
          </div>

          {/* Verify Button */}
          <Button
            type="submit"
            disabled={isLoading || code.length !== 4}
            className="w-full h-12 bg-gradient-to-r from-[#F7960F] to-[#FF8C00] hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-xl text-base disabled:opacity-50 mt-12"
          >
            {isLoading ? "Verifying..." : "Verify Account"}
          </Button>
        </form>
      </div>
    );
  },
);

VerificationForm.displayName = "VerificationForm";

export { VerificationForm };
