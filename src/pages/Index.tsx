import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bus } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-redirect to splash screen after 3 seconds
    const timer = setTimeout(() => {
      navigate("/splash");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600"
      style={{
        backgroundImage: "url(/orange-bg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        ...(window.innerWidth <= 640 && {
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F47bedcd915494a2c9d8c3faf11622396%2F3e3b118899d545fe8107825676bfdf48)",
        }),
      }}
    >
      <div className="text-center">
        {/* App Logo/Icon - Location Pin with Figma Bus Design */}
        <div className="mb-8">
          <svg
            className="w-20 h-24 drop-shadow-lg mx-auto"
            viewBox="0 0 80 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Location pin shape */}
            <path
              d="M40 0C18 0 0 18 0 40C0 62 40 96 40 96C40 96 80 62 80 40C80 18 62 0 40 0Z"
              fill="white"
            />
            {/* Perfect Figma bus design match */}
            <g transform="translate(40, 28)">
              {/* Bus curved top/roof */}
              <rect
                x="-9"
                y="-8"
                width="18"
                height="3"
                rx="1.5"
                fill="#F97316"
              />
              {/* Bus main rectangular body */}
              <rect x="-11" y="-5" width="22" height="8" fill="#F97316" />
              {/* Two white circular headlights/windows */}
              <circle cx="-4" cy="-1" r="2" fill="white" />
              <circle cx="4" cy="-1" r="2" fill="white" />
              {/* Side detail elements (door handles/mirrors) */}
              <rect
                x="-13"
                y="-6"
                width="1"
                height="4"
                rx="0.5"
                fill="#F97316"
              />
              <rect
                x="12"
                y="-6"
                width="1"
                height="4"
                rx="0.5"
                fill="#F97316"
              />
              {/* Bottom center protrusion */}
              <rect x="-2" y="3" width="4" height="2" rx="1" fill="#F97316" />
            </g>
          </svg>
        </div>
        {/* App Name */}
        <h1 className="text-4xl font-bold text-white mb-2">Buscomfy+</h1>
        <p className="text-white/90 text-lg mb-8">Your Travel Companion</p>

        {/* Loading Animation */}
        <div className="flex justify-center mb-6">
          <svg className="animate-spin h-8 w-8 text-white" viewBox="0 0 50 50">
            <circle
              className="opacity-25"
              cx="25"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
            <circle
              className="opacity-75"
              cx="25"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeDasharray="100"
              strokeDashoffset="75"
            />
          </svg>
        </div>

        {/* Loading Text */}
        <p className="text-white/80 text-sm">Loading your journey...</p>

        {/* Loading Progress Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
          <div
            className="w-2 h-2 bg-white/60 rounded-full animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-white/60 rounded-full animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
