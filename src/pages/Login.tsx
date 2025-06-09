import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "@/components/LoginForm";

const Login = () => {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    // Clear previous errors
    setEmailError("");
    setPasswordError("");
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Demo validation - you can test different scenarios
    if (email === "test@test.com" && password === "wrongpassword") {
      setPasswordError("Incorrect password. Please check your password.");
      setIsLoading(false);
      return;
    }

    if (email === "invalid@email.com") {
      setEmailError("User not found. Please check your email address.");
      setIsLoading(false);
      return;
    }

    // Successful login simulation
    console.log("Login successful:", { email, password });
    setIsLoading(false);
    navigate("/");
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password page
    navigate("/forgot-password");
  };

  const handleCreateAccount = () => {
    // Navigate to register page
    navigate("/register");
  };

  const handleSocialLogin = (provider: "facebook" | "google") => {
    // Handle social login
    console.log(`${provider} login attempted`);

    // For demo purposes, navigate to home after "login"
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center p-4">
      <LoginForm
        onLogin={handleLogin}
        onForgotPassword={handleForgotPassword}
        onCreateAccount={handleCreateAccount}
        onSocialLogin={handleSocialLogin}
        emailError={emailError}
        passwordError={passwordError}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Login;
