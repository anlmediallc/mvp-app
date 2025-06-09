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
      className="h-screen bg-white flex items-center justify-center p-2 overflow-hidden"
      style={{
        backgroundImage: "url(/login-bg.svg)",
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
