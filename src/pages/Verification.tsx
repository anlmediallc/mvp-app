import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { VerificationForm } from "@/components/VerificationForm";

const Verification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [codeError, setCodeError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  // Get email and context from navigation state or use default
  const email = location.state?.email || "johndoe@gmail.com";
  const isPasswordReset = location.state?.isPasswordReset || false;

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

      if (isPasswordReset) {
        // For password reset, go to reset password form
        navigate("/reset-password", {
          state: {
            email: email,
          },
        });
      } else {
        // For account verification
        navigate("/login", {
          state: {
            message: "Account verified successfully! Please login.",
          },
        });
      }
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
    <div
      className="h-screen bg-white flex items-center justify-center p-2 overflow-hidden"
      style={{
        backgroundImage: "url(/login-bg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        ...(window.innerWidth <= 640 && {
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F47bedcd915494a2c9d8c3faf11622396%2F3e3b118899d545fe8107825676bfdf48)",
        }),
      }}
    >
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
