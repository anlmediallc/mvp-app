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

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (
        onRegister &&
        firstName &&
        lastName &&
        email &&
        password &&
        confirmPassword
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
          "w-full max-w-md mx-auto bg-white rounded-3xl p-8 shadow-lg font-inter",
          className,
        )}
        {...props}
      >
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Register
        </h1>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* First Name */}
            <div className="space-y-2">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <Input
                id="firstName"
                type="text"
                placeholder="Dinesh"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={cn(
                  "h-12 text-base rounded-xl focus:ring-orange-500",
                  firstNameError
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-200 focus:border-orange-500",
                )}
                required
              />
              {firstNameError && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>{firstNameError}</span>
                </div>
              )}
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <Input
                id="lastName"
                type="text"
                placeholder="VG"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={cn(
                  "h-12 text-base rounded-xl focus:ring-orange-500",
                  lastNameError
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-200 focus:border-orange-500",
                )}
                required
              />
              {lastNameError && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>{lastNameError}</span>
                </div>
              )}
            </div>
          </div>

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

          {/* Create Account Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-gradient-to-r from-[#F7960F] to-[#FF8C00] hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-xl text-base disabled:opacity-50 mt-8"
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </Button>
        </form>

        {/* Terms and Privacy */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <span>By continuing, you agree to our </span>
          <button
            type="button"
            onClick={onTermsClick}
            className="text-orange-500 font-medium hover:text-orange-600 underline"
          >
            Terms of Service
          </button>
          <span> and </span>
          <button
            type="button"
            onClick={onPrivacyClick}
            className="text-orange-500 font-medium hover:text-orange-600 underline"
          >
            Privacy Policy
          </button>
          <span>.</span>
        </div>
      </div>
    );
  },
);

RegisterForm.displayName = "RegisterForm";

export { RegisterForm };
