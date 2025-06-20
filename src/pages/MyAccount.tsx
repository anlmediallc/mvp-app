import { useNavigate } from "react-router-dom";
import { MyAccount as MyAccountComponent } from "@/components/MyAccount";

const MyAccount = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleMenuClick = (item: string) => {
    switch (item) {
      case "personal-info":
        navigate("/personal-info");
        break;
      case "change-password":
        navigate("/reset-password");
        break;
      case "notification-preferences":
        navigate("/notifications");
        break;
      case "privacy-settings":
        navigate("/help-center");
        break;
      default:
        console.log(`Navigate to ${item}`);
    }
  };

  const handleNavItemClick = (item: string) => {
    switch (item) {
      case "home":
        navigate("/");
        break;
      case "calendar":
        navigate("/trip-details");
        break;
      case "bookings":
        navigate("/trip-stops");
        break;
      case "profile":
        // Already on account page
        break;
      default:
        console.log(`Navigate to ${item}`);
    }
  };

  // Demo user info - in a real app this would come from user context/API
  const userInfo = {
    name: "Dinesh VG",
    phone: "7598113129",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
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
      <MyAccountComponent
        onBack={handleBack}
        onMenuItemClick={handleMenuClick}
        onNavItemClick={handleNavItemClick}
        userInfo={userInfo}
      />
    </div>
  );
};

export default MyAccount;
