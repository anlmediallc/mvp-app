import { useNavigate } from "react-router-dom";
import { SplashScreen } from "@/components/SplashScreen";

const Splash = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to onboarding flow after splash
    navigate("/onboarding-flow");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    >
      <SplashScreen
        appName="Buscomfy+"
        onTap={handleContinue}
        autoAdvance={true}
        delay={2500}
      />
    </div>
  );
};

export default Splash;