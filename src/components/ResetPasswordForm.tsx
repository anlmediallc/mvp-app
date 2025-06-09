import * as React from "react";
import { useState } from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface ResetPasswordFormProps {
  email?: string;
  onResetPassword?: (password: string, confirmPassword: string) => void;
  onBackToLogin?: () => void;
  passwordError?: string;
  confirmPasswordError?: string;
  isLoading?: boolean;
  className?: string;
}

const ResetPasswordForm = React.forwardRef<
  HTMLDivElement,
  ResetPasswordFormProps
>(
  (
    {
      email = "johndoe@gmail.com",
      onResetPassword,
      onBackToLogin,
      passwordError,
      confirmPasswordError,
      isLoading = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (onResetPassword && password && confirmPassword) {
        onResetPassword(password, confirmPassword);
      }
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword(!showConfirmPassword);
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
          Create New Password
        </h1>

        {/* Description */}
        <div className="text-center mb-6">
          <p className="text-gray-600 text-sm">Create a new password for</p>
          <p className="text-gray-800 font-medium">{email}</p>
        </div>

        {/* Reset Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* New Password Field */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700">
              New Password
            </div>
            <div className="relative mt-2">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={cn(
                  "h-12 rounded-xl border-gray-300 text-base pr-12",
                  passwordError && "border-red-500 focus:border-red-500",
                )}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {passwordError && (
              <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                <AlertCircle className="h-4 w-4" />
                <span>{passwordError}</span>
              </div>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-2 max-sm:mt-2">
            <div className="text-sm font-medium text-gray-700">
              Confirm Password
            </div>
            <div className="relative mt-2">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={cn(
                  "h-12 rounded-xl border-gray-300 text-base pr-12",
                  confirmPasswordError && "border-red-500 focus:border-red-500",
                )}
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {confirmPasswordError && (
              <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                <AlertCircle className="h-4 w-4" />
                <span>{confirmPasswordError}</span>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-gradient-to-r from-[#F7960F] to-[#FF8C00] hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-xl text-base disabled:opacity-50 mt-12"
          >
            {isLoading ? "Updating..." : "Update Password"}
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

ResetPasswordForm.displayName = "ResetPasswordForm";

export { ResetPasswordForm };
