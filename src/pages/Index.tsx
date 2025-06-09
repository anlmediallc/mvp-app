import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="text-center">
        {/* TODO: replace everything here with the actual app! */}
        <h1 className="text-2xl font-semibold text-slate-800 flex items-center justify-center gap-3">
          <svg
            className="animate-spin h-8 w-8 text-slate-400"
            viewBox="0 0 50 50"
          >
            <circle
              className="opacity-30"
              cx="25"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
            />
            <circle
              className="text-slate-600"
              cx="25"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
              strokeDasharray="100"
              strokeDashoffset="75"
            />
          </svg>
          App Ready!
        </h1>
        <p className="mt-4 text-slate-600 max-w-md">
          Your onboarding screen has been successfully integrated
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Button asChild size="lg">
            <Link to="/splash">🚌 Buscomfy+ Splash</Link>
          </Button>
          <Button asChild>
            <Link to="/login">📝 Login Form</Link>
          </Button>
          <Button asChild>
            <Link to="/onboarding">Single Onboarding Screen</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/onboarding-flow">Multi-Screen Flow</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
