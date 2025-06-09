import * as React from "react";
import { useState } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface ForgotPasswordFormProps {
  onSendReset?: (email: string) => void;
  onBackToLogin?: () => void;
  emailError?: string;
  isLoading?: boolean;
  className?: string;
}

const ForgotPasswordForm = React.forwardRef<
  HTMLDivElement,
  ForgotPasswordFormProps
>(
  (
    {
      onSendReset,
      onBackToLogin,
      emailError,
      isLoading = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (onSendReset && email) {
        onSendReset(email);
      }
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
          Forgot Password
        </h1>

        {/* Description */}
        <div className="text-center mb-6">
          <p className="text-gray-600 text-sm">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
        </div>

        {/* Reset Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700">E-mail</div>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cn(
                "h-12 rounded-xl border-gray-300 text-base",
                emailError && "border-red-500 focus:border-red-500",
              )}
              required
            />
            {emailError && (
              <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                <AlertCircle className="h-4 w-4" />
                <span>{emailError}</span>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-gradient-to-r from-[#F7960F] to-[#FF8C00] hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-xl text-base disabled:opacity-50 mt-12"
          >
            {isLoading ? "Sending..." : "Send Reset Link"}
          </Button>
        </form>

        {/* Back to Login */}
        <div className="mt-8 text-center">
          <span className="text-gray-600 text-sm">
            Remember your password?{" "}
          </span>
          <button
            type="button"
            onClick={onBackToLogin}
            className="text-orange-500 text-sm font-medium underline hover:text-orange-600 focus:outline-none"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  },
);

ForgotPasswordForm.displayName = "ForgotPasswordForm";

export { ForgotPasswordForm };
