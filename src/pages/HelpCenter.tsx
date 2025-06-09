import { useNavigate } from "react-router-dom";
import { HelpCenter as HelpCenterComponent } from "@/components/HelpCenter";

const HelpCenter = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleCategoryClick = (categoryId: string) => {
    // Navigate to specific help category or content
    switch (categoryId) {
      case "report-problem":
        navigate("/report-problem");
        break;
      case "tickets-payments":
        // Could navigate to a tickets FAQ page
        console.log("Navigate to tickets and payments help");
        break;
      case "travel-information":
        // Could navigate to a travel info FAQ page
        console.log("Navigate to travel information help");
        break;
      case "safety":
        // Could navigate to a safety FAQ page
        console.log("Navigate to safety help");
        break;
      default:
        console.log(`Navigate to ${categoryId} help section`);
    }
  };

  const handleSearch = (query: string) => {
    // Implement search functionality
    console.log("Search query:", query);
    // Could filter help articles or navigate to search results
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-0">
      <HelpCenterComponent
        onBack={handleBack}
        onCategoryClick={handleCategoryClick}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default HelpCenter;
