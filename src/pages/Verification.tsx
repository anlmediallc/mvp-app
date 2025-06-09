import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { VerificationForm } from "@/components/VerificationForm";

const Verification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [codeError, setCodeError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  // Get email from navigation state or use default
  const email = location.state?.email || "johndoe@gmail.com";

  const handleVerify = async (code: string) => {
    setCodeError("");
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Demo verification logic
    if (code === "1234") {
      // Successful verification
      console.log("Verification successful for code:", code);
      setIsLoading(false);
      navigate("/login", {
        state: {
          message: "Account verified successfully! Please login.",
        },
      });
    } else {
      // Invalid code
      setCodeError("Invalid verification code. Please try again.");
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    // Simulate resending code
    console.log("Resending verification code to:", email);

    // In a real app, this would trigger an API call to resend the code
    // For demo purposes, just log it
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("New verification code sent!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <VerificationForm
        email={email}
        onVerify={handleVerify}
        onResendCode={handleResendCode}
        codeError={codeError}
        isLoading={isLoading}
        resendCooldown={59}
      />
    </div>
  );
};

export default Verification;
