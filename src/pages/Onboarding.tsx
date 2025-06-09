import { useNavigate } from "react-router-dom";
import { OnboardingScreen } from "@/components/OnboardingScreen";

const Onboarding = () => {
  const navigate = useNavigate();

  const handleSkip = () => {
    // Navigate to home page when skipping
    navigate("/");
  };

  const handleContinue = () => {
    // For now, navigate to home page
    // In a real app, this would go to the next onboarding screen
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
      <OnboardingScreen
        title="Your Journey, Smarter & Smoother!"
        subtitle="Experience seamless travel with real-time tracking, digital tickets, and in-trip comfort—all in one app."
        onSkip={handleSkip}
        onContinue={handleContinue}
        showSkip={true}
      />
    </div>
  );
};

export default Onboarding;
