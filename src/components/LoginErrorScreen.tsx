import * as React from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface LoginErrorScreenProps {
  onLogin?: () => void;
  onForgotPassword?: () => void;
  onCreateAccount?: () => void;
  onSocialLogin?: (provider: "facebook" | "google") => void;
  className?: string;
}

const LoginErrorScreen = React.forwardRef<
  HTMLDivElement,
  LoginErrorScreenProps
>(
  (
    {
      onLogin,
      onForgotPassword,
      onCreateAccount,
      onSocialLogin,
      className,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
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
          Login
        </h1>

        {/* Login Form with Error States */}
        <form className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700">E-mail</div>
            <Input
              type="email"
              placeholder="Enter your email"
              value="test@test.com"
              className="h-12 rounded-xl border-gray-300 text-base"
              readOnly
            />
          </div>

          {/* Password Field with Error */}
          <div className="space-y-2 max-sm:mt-2">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-2">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value="wrongpassword"
                className="h-12 rounded-xl border-red-500 focus:border-red-500 text-base pr-12"
                readOnly
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
            {/* Error Message */}
            <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
              <AlertCircle className="h-4 w-4" />
              <span>Incorrect password. Please check your password.</span>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right mt-6 max-sm:mt-1">
            <button
              type="button"
              onClick={() => (window.location.href = "/forgot-password")}
              className="text-orange-500 text-sm underline hover:text-orange-600 focus:outline-none"
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <Button
            type="button"
            onClick={onLogin}
            className="w-full h-12 bg-gradient-to-r from-[#F7960F] to-[#FF8C00] hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-xl text-base"
          >
            Login
          </Button>
        </form>

        {/* Social Login */}
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <button
              type="button"
              onClick={() => onSocialLogin?.("facebook")}
              className="w-full inline-flex justify-center py-3 px-4 rounded-xl border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
            >
              <svg
                className="h-5 w-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="ml-2">Facebook</span>
            </button>

            <button
              type="button"
              onClick={() => onSocialLogin?.("google")}
              className="w-full inline-flex justify-center py-3 px-4 rounded-xl border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="ml-2">Google</span>
            </button>
          </div>
        </div>

        {/* Create Account */}
        <div className="mt-8 text-center">
          <span className="text-gray-600 text-sm">Don't have an account? </span>
          <button
            type="button"
            onClick={() => (window.location.href = "/register")}
            className="text-orange-500 text-sm font-medium underline hover:text-orange-600 focus:outline-none"
          >
            Create Account
          </button>
        </div>
      </div>
    );
  },
);

LoginErrorScreen.displayName = "LoginErrorScreen";

export { LoginErrorScreen };
