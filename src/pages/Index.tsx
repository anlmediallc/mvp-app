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
          Your Buscomfy+ app authentication system is complete! Test all forms
          with error states.
        </p>
        <div className="mt-4 p-4 bg-white rounded-lg shadow-sm text-left max-w-md">
          <h3 className="font-semibold text-slate-700 mb-2">🧪 Test Forms:</h3>
          <div className="text-sm text-slate-600 space-y-2">
            <div>
              <strong>Login:</strong>
              <ul className="ml-2 space-y-1">
                <li>
                  •{" "}
                  <code className="bg-gray-100 px-1 rounded">
                    test@test.com
                  </code>{" "}
                  +{" "}
                  <code className="bg-gray-100 px-1 rounded">
                    wrongpassword
                  </code>{" "}
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
            <div>
              <strong>Register:</strong>
              <ul className="ml-2 space-y-1">
                <li>
                  •{" "}
                  <code className="bg-gray-100 px-1 rounded">
                    existing@example.com
                  </code>{" "}
                  = Email exists error
                </li>
                <li>• Short names or passwords = Validation errors</li>
                <li>• Mismatched passwords = Confirm error</li>
              </ul>
            </div>
            <div>
              <strong>Verification:</strong>
              <ul className="ml-2 space-y-1">
                <li>
                  • <code className="bg-gray-100 px-1 rounded">1234</code> =
                  Correct code
                </li>
                <li>• Any other 4-digit code = Invalid error</li>
                <li>• Auto countdown timer for resend</li>
              </ul>
            </div>
            <div>
              <strong>Forgot Password:</strong>
              <ul className="ml-2 space-y-1">
                <li>
                  •{" "}
                  <code className="bg-gray-100 px-1 rounded">
                    notfound@example.com
                  </code>{" "}
                  = Email not found error
                </li>
                <li>• Any valid email = Sends to verification</li>
              </ul>
            </div>
            <div>
              <strong>Reset Password:</strong>
              <ul className="ml-2 space-y-1">
                <li>• Password must be 8+ characters</li>
                <li>• Passwords must match</li>
                <li>• Success redirects to login</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <Button asChild size="lg">
            <Link to="/splash">🚌 Buscomfy+ Splash</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link to="/luggage-check-in">🧳 Luggage Check-In</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link to="/feedback">��� Trip Feedback</Link>
          </Button>
          <Button asChild>
            <Link to="/login">📝 Login Form</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/register">✍️ Register Form</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/verification">🔐 Verification Screen</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/forgot-password">🔑 Forgot Password</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/reset-password">🔐 Reset Password</Link>
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
