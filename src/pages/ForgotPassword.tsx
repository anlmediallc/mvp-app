import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ForgotPasswordForm } from "@/components/ForgotPasswordForm";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendReset = async (email: string) => {
    setEmailError("");
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Demo validation logic
    if (!email.includes("@")) {
      setEmailError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    // Check if email exists (demo)
    if (email === "notfound@example.com") {
      setEmailError("No account found with this email address");
      setIsLoading(false);
      return;
    }

    // Successful reset email sent
    console.log("Password reset email sent to:", email);
    setIsLoading(false);

    // Navigate to verification with reset context
    navigate("/verification", {
      state: {
        email: email,
        isPasswordReset: true,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center p-4">
      <ForgotPasswordForm
        onSendReset={handleSendReset}
        emailError={emailError}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ForgotPassword;
