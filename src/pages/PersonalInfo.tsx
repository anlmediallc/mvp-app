import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PersonalInfo as PersonalInfoComponent } from "@/components/PersonalInfo";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSave = async (data: {
    name: string;
    email: string;
    password: string;
    phone: string;
    countryCode: string;
    avatar?: File;
  }) => {
    // Clear previous errors
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setPhoneError("");
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Demo validation logic
    let hasErrors = false;

    if (!data.name.trim()) {
      setNameError("Name is required");
      hasErrors = true;
    } else if (data.name.trim().length < 2) {
      setNameError("Name must be at least 2 characters");
      hasErrors = true;
    }

    if (!data.email.includes("@")) {
      setEmailError("Please enter a valid email address");
      hasErrors = true;
    }

    if (data.password.length < 8 && data.password !== "**********") {
      setPasswordError("Password must be at least 8 characters");
      hasErrors = true;
    }

    if (!data.phone.trim()) {
      setPhoneError("Phone number is required");
      hasErrors = true;
    } else if (data.phone.length < 10) {
      setPhoneError("Please enter a valid phone number");
      hasErrors = true;
    }

    if (hasErrors) {
      setIsLoading(false);
      return;
    }

    // Successful update
    console.log("Personal info updated:", data);
    setIsLoading(false);

    // Navigate back with success message
    navigate("/my-account", {
      state: {
        message: "Personal information updated successfully!",
      },
    });
  };

  const handleNavItemClick = (item: string) => {
    switch (item) {
      case "home":
        navigate("/");
        break;
      case "calendar":
        console.log("Navigate to calendar/bookings");
        break;
      case "bookings":
        console.log("Navigate to bookings");
        break;
      case "profile":
        navigate("/my-account");
        break;
      default:
        console.log(`Navigate to ${item}`);
    }
  };

  // Demo user info - in a real app this would come from user context/API
  const userInfo = {
    name: "James Rodriguez",
    email: "Jamesrodriguez@gmail.com",
    phone: "7598113186",
    countryCode: "+91",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
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
      <PersonalInfoComponent
        onBack={handleBack}
        onSave={handleSave}
        onNavItemClick={handleNavItemClick}
        userInfo={userInfo}
        nameError={nameError}
        emailError={emailError}
        passwordError={passwordError}
        phoneError={phoneError}
        isLoading={isLoading}
      />
    </div>
  );
};

export default PersonalInfo;
