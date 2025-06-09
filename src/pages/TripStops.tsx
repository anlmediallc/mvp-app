import React from "react";
import { useNavigate } from "react-router-dom";
import TripStops from "../components/TripStops";

export default function TripStopsPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    // Go back to trip details
    navigate("/trip-details");
  };

  const handleOptionsMenu = () => {
    // In a real app, this would open a menu with options like:
    // - Share trip
    // - Download offline
    // - Report issue
    console.log("Options menu clicked");
  };

  return <TripStops onBack={handleBack} onOptionsMenu={handleOptionsMenu} />;
}
