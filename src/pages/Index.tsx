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
          Your Buscomfy+ app screens are ready! Test the login form with error
          states.
        </p>
        <div className="mt-4 p-4 bg-white rounded-lg shadow-sm text-left max-w-md">
          <h3 className="font-semibold text-slate-700 mb-2">
            🧪 Test Login Form:
          </h3>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>
              • <code className="bg-gray-100 px-1 rounded">test@test.com</code>{" "}
              + <code className="bg-gray-100 px-1 rounded">wrongpassword</code>{" "}
              = Password error
            </li>
            <li>
              •{" "}
              <code className="bg-gray-100 px-1 rounded">
                invalid@email.com
              </code>{" "}
              + any password = Email error
            </li>
            <li>• Any other email + password = Success</li>
          </ul>
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <Button asChild size="lg">
            <Link to="/splash">🚌 Buscomfy+ Splash</Link>
          </Button>
          <Button asChild>
            <Link to="/login">📝 Login Form</Link>
          </Button>
          <Button asChild variant="destructive">
            <Link to="/login-error">❌ Login Error Screen</Link>
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
