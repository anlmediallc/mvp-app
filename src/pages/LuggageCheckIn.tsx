import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuggageCheckInForm } from "@/components/LuggageCheckInForm";

const LuggageCheckIn = () => {
  const navigate = useNavigate();
  const [luggageTypeError, setLuggageTypeError] = useState<string>("");
  const [weightError, setWeightError] = useState<string>("");
  const [imageError, setImageError] = useState<string>("");
  const [guidelinesError, setGuidelinesError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: {
    luggageType: string;
    weight: string;
    specialInstructions: string;
    imageFile?: File;
    confirmsGuidelines: boolean;
  }) => {
    // Clear previous errors
    setLuggageTypeError("");
    setWeightError("");
    setImageError("");
    setGuidelinesError("");
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Demo validation logic
    let hasErrors = false;

    if (!data.luggageType) {
      setLuggageTypeError("Please select a luggage type");
      hasErrors = true;
    }

    if (!data.weight) {
      setWeightError("Please enter the luggage weight");
      hasErrors = true;
    } else if (parseFloat(data.weight) > 25) {
      setWeightError("Luggage weight cannot exceed 25kg");
      hasErrors = true;
    } else if (parseFloat(data.weight) <= 0) {
      setWeightError("Please enter a valid weight");
      hasErrors = true;
    }

    if (data.imageFile && data.imageFile.size > 25 * 1024 * 1024) {
      setImageError("File size cannot exceed 25MB");
      hasErrors = true;
    }

    if (!data.confirmsGuidelines) {
      setGuidelinesError(
        "Please confirm that your luggage meets the guidelines",
      );
      hasErrors = true;
    }

    if (hasErrors) {
      setIsLoading(false);
      return;
    }

    // Successful luggage check-in
    console.log("Luggage check-in successful:", data);
    setIsLoading(false);

    // Navigate back or to confirmation screen
    navigate("/", {
      state: {
        message: "Luggage checked in successfully!",
      },
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-0">
      <LuggageCheckInForm
        onSubmit={handleSubmit}
        onBack={handleBack}
        luggageTypeError={luggageTypeError}
        weightError={weightError}
        imageError={imageError}
        guidelinesError={guidelinesError}
        isLoading={isLoading}
      />
    </div>
  );
};

export default LuggageCheckIn;
