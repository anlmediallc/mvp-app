import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OnboardingScreen } from "@/components/OnboardingScreen";

const OnboardingFlow = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const navigate = useNavigate();

  const screens = [
    {
      title: "Your Journey, Smarter & Smoother!",
      subtitle:
        "Experience seamless travel with real-time tracking, digital tickets, and in-trip comfort—all in one app.",
    },
    {
      title: "Real-Time Tracking",
      subtitle:
        "Stay updated with live location tracking and arrival notifications for all your transportation needs.",
    },
    {
      title: "Digital Convenience",
      subtitle:
        "Store all your tickets digitally and access them instantly without the hassle of physical documents.",
    },
  ];

  const handleSkip = () => {
    navigate("/");
  };

  const handleContinue = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      navigate("/");
    }
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
      <OnboardingScreen
        title={screens[currentScreen].title}
        subtitle={screens[currentScreen].subtitle}
        onSkip={handleSkip}
        onContinue={handleContinue}
        showSkip={currentScreen === 0}
      />

      {/* Progress Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {screens.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentScreen ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default OnboardingFlow;
