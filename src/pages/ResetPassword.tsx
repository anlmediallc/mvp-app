import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ResetPasswordForm } from "@/components/ResetPasswordForm";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  // Get email from navigation state
  const email = location.state?.email || "";

  const handleResetPassword = async (
    password: string,
    confirmPassword: string,
  ) => {
    setPasswordError("");
    setConfirmPasswordError("");
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Demo validation logic
    let hasErrors = false;

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      hasErrors = true;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      hasErrors = true;
    }

    if (hasErrors) {
      setIsLoading(false);
      return;
    }

    // Successful password reset
    console.log("Password reset successful for email:", email);
    setIsLoading(false);

    // Navigate to login with success message
    navigate("/login", {
      state: {
        message:
          "Password reset successful! Please login with your new password.",
        email: email,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <ResetPasswordForm
        onResetPassword={handleResetPassword}
        passwordError={passwordError}
        confirmPasswordError={confirmPasswordError}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ResetPassword;
