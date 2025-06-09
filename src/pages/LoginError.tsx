import { useNavigate } from "react-router-dom";
import { LoginErrorScreen } from "@/components/LoginErrorScreen";

const LoginError = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // For demo purposes, navigate to home
    navigate("/");
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
    // navigate("/forgot-password");
  };

  const handleCreateAccount = () => {
    console.log("Create account clicked");
    // navigate("/signup");
  };

  const handleSocialLogin = (provider: "facebook" | "google") => {
    console.log(`${provider} login attempted`);
    navigate("/");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/login-background.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
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
