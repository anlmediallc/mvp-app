import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
        {/* App Logo/Icon - Location Pin with Bus */}
        <div className="mb-8">
          <div className="relative w-20 h-24 mx-auto">
            {/* Location Pin Shape */}
            <svg
              className="w-20 h-24 drop-shadow-lg"
              viewBox="0 0 80 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Pin shape - teardrop */}
              <path
                d="M40 0C18 0 0 18 0 40C0 70 40 96 40 96C40 96 80 70 80 40C80 18 62 0 40 0Z"
                fill="white"
              />
              {/* Bus icon inside pin */}
              <g transform="translate(20, 16)">
                {/* Bus body */}
                <rect
                  x="4"
                  y="8"
                  width="32"
                  height="16"
                  rx="2"
                  fill="#F97316"
                />
                {/* Bus wheels */}
                <circle cx="12" cy="28" r="3" fill="#F97316" />
                <circle cx="28" cy="28" r="3" fill="#F97316" />
                {/* Bus windows */}
                <rect x="6" y="10" width="4" height="3" fill="white" />
                <rect x="12" y="10" width="4" height="3" fill="white" />
                <rect x="18" y="10" width="4" height="3" fill="white" />
                <rect x="24" y="10" width="4" height="3" fill="white" />
                <rect x="30" y="10" width="4" height="3" fill="white" />
                {/* Bus front */}
                <rect x="6" y="15" width="28" height="6" fill="#F97316" />
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
