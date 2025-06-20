import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Onboarding from "./pages/Onboarding";
import OnboardingFlow from "./pages/OnboardingFlow";
import Login from "./pages/Login";
import LoginError from "./pages/LoginError";
import Register from "./pages/Register";
import Verification from "./pages/Verification";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import LuggageCheckIn from "./pages/LuggageCheckIn";
import Feedback from "./pages/Feedback";
import ReportProblem from "./pages/ReportProblem";
import HelpCenter from "./pages/HelpCenter";
import MyAccount from "./pages/MyAccount";
import PersonalInfo from "./pages/PersonalInfo";
import NotificationCenter from "./pages/NotificationCenter";
import TripDetails from "./pages/TripDetails";
import TripStops from "./pages/TripStops";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/onboarding-flow" element={<OnboardingFlow />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-error" element={<LoginError />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/luggage-check-in" element={<LuggageCheckIn />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/report-problem" element={<ReportProblem />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/notifications" element={<NotificationCenter />} />
          <Route path="/trip-details" element={<TripDetails />} />
          <Route path="/trip-stops" element={<TripStops />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
