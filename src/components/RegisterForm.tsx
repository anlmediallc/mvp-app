import * as React from "react";
import { useState } from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface RegisterFormProps {
  onRegister?: (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => void;
  onTermsClick?: () => void;
  onPrivacyClick?: () => void;
  firstNameError?: string;
  lastNameError?: string;
  emailError?: string;
  passwordError?: string;
  confirmPasswordError?: string;
  isLoading?: boolean;
  className?: string;
}

const RegisterForm = React.forwardRef<HTMLDivElement, RegisterFormProps>(
  (
    {
      onRegister,
      onTermsClick,
      onPrivacyClick,
      firstNameError,
      lastNameError,
      emailError,
      passwordError,
      confirmPasswordError,
      isLoading = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (
        onRegister &&
        firstName &&
        lastName &&
        email &&
        password &&
        confirmPassword &&
        acceptedTerms
      ) {
        onRegister({ firstName, lastName, email, password, confirmPassword });
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
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4 sm:mt-0 max-sm:mt-3">
          Register
        </h1>

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <div className="text-xs font-medium text-gray-700">
                First Name
              </div>
              <Input
                type="text"
                placeholder="Dinesh"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={cn(
                  "h-8 rounded-lg border-gray-300 text-sm",
                  firstNameError && "border-red-500 focus:border-red-500",
                )}
                required
              />
              {firstNameError && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-0.5">
                  <AlertCircle className="h-3 w-3" />
                  <span>{firstNameError}</span>
                </div>
              )}
            </div>
            <div className="space-y-1">
              <div className="text-xs font-medium text-gray-700">Last Name</div>
              <Input
                type="text"
                placeholder="VG"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={cn(
                  "h-8 rounded-lg border-gray-300 text-sm",
                  lastNameError && "border-red-500 focus:border-red-500",
                )}
                required
              />
              {lastNameError && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-0.5">
                  <AlertCircle className="h-3 w-3" />
                  <span>{lastNameError}</span>
                </div>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-1 max-sm:mt-1">
            <div className="text-xs font-medium text-gray-700">E-mail</div>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cn(
                "h-8 rounded-lg border-gray-300 text-sm",
                emailError && "border-red-500 focus:border-red-500",
              )}
              required
            />
            {emailError && (
              <div className="flex items-center gap-1 text-red-600 text-xs mt-0.5">
                <AlertCircle className="h-3 w-3" />
                <span>{emailError}</span>
              </div>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-1 max-sm:mt-1">
            <div className="text-xs font-medium text-gray-700">Password</div>
            <div className="relative mt-1">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={cn(
                  "h-8 rounded-lg border-gray-300 text-sm pr-8",
                  passwordError && "border-red-500 focus:border-red-500",
                )}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="h-3 w-3" />
                ) : (
                  <Eye className="h-3 w-3" />
                )}
              </button>
            </div>
            {passwordError && (
              <div className="flex items-center gap-1 text-red-600 text-xs mt-0.5">
                <AlertCircle className="h-3 w-3" />
                <span>{passwordError}</span>
              </div>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-1 max-sm:mt-1">
            <div className="text-xs font-medium text-gray-700">
              Confirm Password
            </div>
            <div className="relative mt-1">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={cn(
                  "h-8 rounded-lg border-gray-300 text-sm pr-8",
                  confirmPasswordError && "border-red-500 focus:border-red-500",
                )}
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-3 w-3" />
                ) : (
                  <Eye className="h-3 w-3" />
                )}
              </button>
            </div>
            {confirmPasswordError && (
              <div className="flex items-center gap-1 text-red-600 text-xs mt-0.5">
                <AlertCircle className="h-3 w-3" />
                <span>{confirmPasswordError}</span>
              </div>
            )}
          </div>

          {/* Terms and Privacy */}
          <div className="flex items-start gap-2 max-sm:mt-1">
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="mt-0.5 h-3 w-3 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="text-xs text-gray-600 leading-4">
              I agree to the{" "}
              <button
                type="button"
                onClick={onTermsClick}
                className="text-orange-500 underline hover:text-orange-600"
              >
                Terms of Service
              </button>{" "}
              and{" "}
              <button
                type="button"
                onClick={onPrivacyClick}
                className="text-orange-500 underline hover:text-orange-600"
              >
                Privacy Policy
              </button>
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading || !acceptedTerms}
            className="w-full h-8 bg-gradient-to-r from-[#F7960F] to-[#FF8C00] hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-lg text-sm disabled:opacity-50 mt-4"
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </Button>
        </form>

        {/* Login Link */}
        <div className="mt-4 text-center">
          <span className="text-gray-600 text-xs">
            Already have an account?{" "}
          </span>
          <button
            type="button"
            onClick={() => (window.location.href = "/login")}
            className="text-orange-500 text-xs font-medium underline hover:text-orange-600 focus:outline-none"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  },
);

RegisterForm.displayName = "RegisterForm";

export { RegisterForm };
