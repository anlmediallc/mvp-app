import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const OnboardingFlow = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const navigate = useNavigate();

  const screens = [
    {
      title: "Your Journey, Smarter & Smoother!",
      subtitle:
        "Experience seamless travel with real-time tracking, digital tickets, and in-trip comfortable in one app.",
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
    <>
      <div className="min-h-screen bg-white text-slate-900 font-normal text-base leading-6">
        <div className="font-normal pointer-events-auto">
          <div className="relative z-10 flex justify-end bg-orange-400 font-normal pointer-events-auto p-6 pt-16 pb-6 -m-3 -mt-3.5 sm:gap-12 sm:justify-center sm:items-center sm:-mr-6 sm:mt-0">
            <Button
              variant="ghost"
              onClick={handleSkip}
              className="flex items-center gap-2 text-white hover:bg-white/10 transition-colors rounded-md text-sm font-medium h-10 justify-center leading-5 -mt-14 whitespace-nowrap px-4 py-2 sm:gap-12 sm:justify-center sm:items-center sm:-mr-6 sm:-mt-7"
            >
              <span className="text-lg font-semibold leading-7 whitespace-nowrap pointer-events-auto sm:-mr-10 sm:ml-5">
                Skip
              </span>
              <ChevronRight className="h-4 w-4 block fill-none font-medium overflow-hidden stroke-white stroke-2 pointer-events-auto whitespace-nowrap sm:flex sm:flex-col sm:items-stretch sm:mt-1 sm:-mr-1 sm:-ml-1" />
            </Button>
          </div>

          <div className="font-normal pointer-events-auto" />

          <div
            className="relative min-h-screen bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center p-4 font-normal pointer-events-auto sm:bg-orange-400"
            style={{
              backgroundImage:
                "url(https://2ac212472ec64c4582e1703c57c9c27f-b99b23cf3e5141f3b8ba63a73.projects.builder.codes/orange-bg.svg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              ...(window.innerWidth <= 640 && {
                backgroundColor: "#ef940e",
                backgroundImage:
                  "url(https://cdn.builder.io/api/v1/image/assets%2F47bedcd915494a2c9d8c3faf11622396%2Fdf199ffe446d4284879a84f8216f4d2e)",
              }),
            }}
          >
            {/* Progress Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-5 flex font-normal pointer-events-auto z-20">
              {screens.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors font-normal pointer-events-auto ${
                    index === currentScreen
                      ? "bg-orange-500"
                      : "bg-gray-300 ml-2"
                  }`}
                />
              ))}
            </div>

            {/* Continue Button positioned as overlay */}
            <Button
              onClick={handleContinue}
              className="absolute bottom-16 left-4 right-4 bg-white text-orange-500 hover:bg-white/95 rounded-full text-sm font-medium h-9 leading-5 whitespace-nowrap transition-all pointer-events-auto border-transparent sm:text-orange-500 p-3 z-10"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-white text-xl font-semibold leading-tight pointer-events-auto sm:mt-1 -mt-91 mb-3">
          {screens[currentScreen].title}
        </h1>

        <p className="text-white/90 text-sm font-medium leading-tight mb-4 max-w-xs pointer-events-auto">
          {screens[currentScreen].subtitle}
        </p>
      </div>
    </>
  );
};

export default OnboardingFlow;
