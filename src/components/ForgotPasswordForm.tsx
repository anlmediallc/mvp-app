import * as React from "react";
import { useState } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface ForgotPasswordFormProps {
  onSendReset?: (email: string) => void;
  emailError?: string;
  isLoading?: boolean;
  className?: string;
}

const ForgotPasswordForm = React.forwardRef<
  HTMLDivElement,
  ForgotPasswordFormProps
>(
  (
    { onSendReset, emailError, isLoading = false, className, ...props },
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
          "w-full max-w-md mx-auto bg-white rounded-3xl p-8 shadow-lg font-inter",
          className,
        )}
        style={{
          backgroundImage: "url(/form-bg.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        {...props}
      >
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Forgot Password
        </h1>

        {/* Description */}
        <div className="text-center mb-8">
          <p className="text-gray-600 leading-relaxed">
            No worries! Enter your email address below and we will send you a
            code to reset password.
          </p>
        </div>

        {/* Reset Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              E-mail
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cn(
                "h-12 text-base rounded-xl focus:ring-orange-500",
                emailError
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-200 focus:border-orange-500",
              )}
              required
            />
            {emailError && (
              <div className="flex items-center gap-2 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>{emailError}</span>
              </div>
            )}
          </div>

          {/* Send Reset Button */}
          <Button
            type="submit"
            disabled={isLoading || !email}
            className="w-full h-12 bg-gradient-to-r from-[#F7960F] to-[#FF8C00] hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-xl text-base disabled:opacity-50 mt-12"
          >
            {isLoading ? "Sending..." : "Send Reset Instruction"}
          </Button>
        </form>
      </div>
    );
  },
);

ForgotPasswordForm.displayName = "ForgotPasswordForm";

export { ForgotPasswordForm };
