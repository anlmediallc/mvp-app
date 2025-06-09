import { useNavigate } from "react-router-dom";
import { LoginErrorScreen } from "@/components/LoginErrorScreen";

const LoginError = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // For demo purposes, navigate to home
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
    console.log(`${provider} login attempted`);
    navigate("/");
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center p-4"
      style={{
        backgroundImage: "url(/orange-bg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <LoginErrorScreen
        onLogin={handleLogin}
        onForgotPassword={handleForgotPassword}
        onCreateAccount={handleCreateAccount}
        onSocialLogin={handleSocialLogin}
      />
    </div>
  );
};

export default LoginError;
