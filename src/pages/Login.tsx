import { useNavigate } from "react-router-dom";
import { LoginForm } from "@/components/LoginForm";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    // In a real app, this would handle authentication
    console.log("Login attempted with:", { email, password });

    // For demo purposes, navigate to home after "login"
    navigate("/");
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password page (would be implemented later)
    console.log("Forgot password clicked");
    // navigate("/forgot-password");
  };

  const handleCreateAccount = () => {
    // Navigate to signup page (would be implemented later)
    console.log("Create account clicked");
    // navigate("/signup");
  };

  const handleSocialLogin = (provider: "facebook" | "google") => {
    // Handle social login
    console.log(`${provider} login attempted`);

    // For demo purposes, navigate to home after "login"
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <LoginForm
        onLogin={handleLogin}
        onForgotPassword={handleForgotPassword}
        onCreateAccount={handleCreateAccount}
        onSocialLogin={handleSocialLogin}
      />
    </div>
  );
};

export default Login;
