import { useNavigate } from "react-router-dom";
import { SplashScreen } from "@/components/SplashScreen";

const Splash = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to onboarding flow after splash
    navigate("/onboarding-flow");
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
