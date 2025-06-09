import React from "react";
import { useNavigate } from "react-router-dom";
import TripDetails from "../components/TripDetails";

export default function TripDetailsPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleViewStops = () => {
    // In a real app, this would navigate to a detailed stops page
    console.log("View all stops clicked");
  };

  const handleAddPassenger = () => {
    // In a real app, this would navigate to an add passenger form
    console.log("Add passenger clicked");
  };

  const handleAddLuggage = () => {
    // Navigate to existing luggage check-in form
    navigate("/luggage-check-in");
  };

  return (
    <TripDetails
      onBack={handleBack}
      onViewStops={handleViewStops}
      onAddPassenger={handleAddPassenger}
      onAddLuggage={handleAddLuggage}
    />
  );
}
