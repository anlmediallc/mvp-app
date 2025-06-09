import * as React from "react";
import { useState } from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface ResetPasswordFormProps {
  onResetPassword?: (password: string, confirmPassword: string) => void;
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
      onResetPassword,
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
          Create New Password
        </h1>

        {/* Description */}
        <div className="text-center mb-8 space-y-2">
          <p className="text-gray-600 leading-relaxed">
            Please enter and confirm your new password.
          </p>
          <p className="text-gray-600 leading-relaxed">
            You will need to login after you reset.
          </p>
        </div>

        {/* Reset Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Password Field */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={cn(
                  "h-12 text-base rounded-xl focus:ring-orange-500 pr-12",
                  passwordError
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-200 focus:border-orange-500",
                )}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            <p className="text-sm text-gray-500">must contain 8 char.</p>
            {passwordError && (
              <div className="flex items-center gap-2 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>{passwordError}</span>
              </div>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="*********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={cn(
                  "h-12 text-base rounded-xl focus:ring-orange-500 pr-12",
                  confirmPasswordError
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-200 focus:border-orange-500",
                )}
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {confirmPasswordError && (
              <div className="flex items-center gap-2 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>{confirmPasswordError}</span>
              </div>
            )}
          </div>

          {/* Reset Password Button */}
          <Button
            type="submit"
            disabled={isLoading || !password || !confirmPassword}
            className="w-full h-12 bg-gradient-to-r from-[#F7960F] to-[#FF8C00] hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-xl text-base disabled:opacity-50 mt-12"
          >
            {isLoading ? "Resetting..." : "Reset Password"}
          </Button>
        </form>
      </div>
    );
  },
);

ResetPasswordForm.displayName = "ResetPasswordForm";

export { ResetPasswordForm };
