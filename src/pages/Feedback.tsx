import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FeedbackForm } from "@/components/FeedbackForm";

const Feedback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  // Get trip details from navigation state or use defaults
  const tripDetails = location.state?.tripDetails || {
    transportCompany: "MSS transport",
    departureTime: "3:05",
    arrivalTime: "7:30",
    duration: "7h 20m",
    from: "Chennai",
    to: "Kochi",
  };

  const handleSubmit = async (data: {
    overallRating: number;
    ratings: {
      cleanliness: number;
      seatComfort: number;
      staffBehaviour: number;
      onboardingExperience: number;
    };
  }) => {
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Log the feedback data
    console.log("Feedback submitted:", {
      ...data,
      tripDetails,
    });

    setIsLoading(false);

    // Navigate back with success message
    navigate("/", {
      state: {
        message:
          "Thank you for your feedback! Your review helps us improve our service.",
      },
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center p-0 overflow-hidden">
      <FeedbackForm
        onSubmit={handleSubmit}
        onBack={handleBack}
        tripDetails={tripDetails}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Feedback;
