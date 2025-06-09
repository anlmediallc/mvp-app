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
        {/* App Logo/Icon - Clean App Icon Style */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-[20px] flex items-center justify-center shadow-lg mx-auto relative">
            {/* Location pin with bus */}
            <svg
              className="w-14 h-16"
              viewBox="0 0 60 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Location pin shape */}
              <path
                d="M30 0C13.5 0 0 13.5 0 30C0 52.5 30 72 30 72C30 72 60 52.5 60 30C60 13.5 46.5 0 30 0Z"
                fill="white"
              />
              {/* Simple clean bus icon */}
              <g transform="translate(30, 22)">
                {/* Bus top section */}
                <rect
                  x="-8"
                  y="-6"
                  width="16"
                  height="3"
                  rx="1.5"
                  fill="#EF940E"
                />
                {/* Bus main body */}
                <rect
                  x="-10"
                  y="-3"
                  width="20"
                  height="8"
                  rx="1"
                  fill="#EF940E"
                />
                {/* Two white circular windows */}
                <circle cx="-4" cy="1" r="2" fill="white" />
                <circle cx="4" cy="1" r="2" fill="white" />
                {/* Side details */}
                <rect
                  x="-12"
                  y="-4"
                  width="1"
                  height="4"
                  rx="0.5"
                  fill="#EF940E"
                />
                <rect
                  x="11"
                  y="-4"
                  width="1"
                  height="4"
                  rx="0.5"
                  fill="#EF940E"
                />
                {/* Bottom section */}
                <rect
                  x="-2"
                  y="5"
                  width="4"
                  height="1.5"
                  rx="0.75"
                  fill="#EF940E"
                />
              </g>
            </svg>
          </div>
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
