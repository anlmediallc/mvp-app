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
    <div
      className="h-screen bg-white flex items-center justify-center p-2 overflow-hidden"
      style={{
        backgroundImage: "url(/login-bg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // Mobile responsive background
        ...(window.innerWidth <= 640 && {
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F47bedcd915494a2c9d8c3faf11622396%2F3e3b118899d545fe8107825676bfdf48)",
        }),
      }}
    >
      <ForgotPasswordForm
        onSendReset={handleSendReset}
        emailError={emailError}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ForgotPassword;
