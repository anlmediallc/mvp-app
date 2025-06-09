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
          <div className="relative w-24 h-28 mx-auto">
            {/* Location Pin Shape */}
            <svg
              className="w-24 h-28 drop-shadow-lg"
              viewBox="0 0 100 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Pin shape */}
              <path
                d="M50 0C22.4 0 0 22.4 0 50C0 87.5 50 120 50 120C50 120 100 87.5 100 50C100 22.4 77.6 0 50 0Z"
                fill="white"
              />
              {/* Bus icon inside pin */}
              <g transform="translate(25, 20)">
                <rect
                  x="5"
                  y="10"
                  width="40"
                  height="20"
                  rx="4"
                  fill="#F97316"
                />
                <circle cx="15" cy="35" r="4" fill="#F97316" />
                <circle cx="35" cy="35" r="4" fill="#F97316" />
                <rect x="8" y="14" width="6" height="4" fill="white" />
                <rect x="18" y="14" width="6" height="4" fill="white" />
                <rect x="28" y="14" width="6" height="4" fill="white" />
                <rect x="38" y="14" width="6" height="4" fill="white" />
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
