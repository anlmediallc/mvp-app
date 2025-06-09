import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReportProblemForm } from "@/components/ReportProblemForm";

const ReportProblem = () => {
  const navigate = useNavigate();
  const [issueTypeError, setIssueTypeError] = useState<string>("");
  const [detailsError, setDetailsError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: { issueType: string; details: string }) => {
    // Clear previous errors
    setIssueTypeError("");
    setDetailsError("");
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Demo validation logic
    let hasErrors = false;

    if (!data.issueType) {
      setIssueTypeError("Please select an issue type");
      hasErrors = true;
    }

    if (!data.details.trim()) {
      setDetailsError("Please provide additional details about the problem");
      hasErrors = true;
    } else if (data.details.trim().length < 10) {
      setDetailsError(
        "Please provide more detailed information (at least 10 characters)",
      );
      hasErrors = true;
    }

    if (hasErrors) {
      setIsLoading(false);
      return;
    }

    // Successful problem report submission
    console.log("Problem report submitted:", data);
    setIsLoading(false);

    // Navigate back with success message
    navigate("/", {
      state: {
        message:
          "Problem report submitted successfully! Our support team will review it shortly.",
      },
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center p-0"
      style={{
        backgroundImage: "url(/orange-bg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ReportProblemForm
        onSubmit={handleSubmit}
        onBack={handleBack}
        issueTypeError={issueTypeError}
        detailsError={detailsError}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ReportProblem;
