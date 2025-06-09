import { useNavigate } from "react-router-dom";
import {
  NotificationCenter as NotificationCenterComponent,
  NotificationItem,
} from "@/components/NotificationCenter";

const NotificationCenter = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleNotificationClick = (notification: NotificationItem) => {
    console.log("Notification clicked:", notification);

    // Handle different notification types
    switch (notification.type) {
      case "delay":
        // Could show delay details or tracking
        console.log("Show delay information");
        break;
      case "reminder":
        // Could navigate to trip details
        console.log("Show trip details");
        break;
      case "booking":
        // Could navigate to booking completion
        console.log("Continue booking process");
        break;
      case "service":
        // Could show service information
        console.log("Show service details");
        break;
      case "feature":
        // Could show app features or changelog
        console.log("Show new features");
        break;
      default:
        console.log("Handle notification:", notification.id);
    }
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

  // Demo notifications - in a real app this would come from API
  const notifications = {
    today: [
      {
        id: "1",
        title: "Your bus is delayed by 15 minutes",
        message: "MSS Transport – 20 min ago",
        timestamp: "20 min ago",
        type: "delay" as const,
      },
      {
        id: "2",
        title: "Trip to Kochi is scheduled today at 3:05 PM",
        message: "Reminder – 1 hr ago",
        timestamp: "1 hr ago",
        type: "reminder" as const,
      },
    ],
    recent: [
      {
        id: "3",
        title: "Complete Your Booking",
        message:
          "Your booking is almost complete. Continue the process to confirm your seat – 1 day ago",
        timestamp: "1 day ago",
        type: "booking" as const,
      },
      {
        id: "4",
        title: "Wi-Fi is available on your bus",
        message: "MSS Transport – 2 days ago",
        timestamp: "2 days ago",
        type: "service" as const,
      },
      {
        id: "5",
        title: "New App Features",
        message: "Check out the latest additions we've made! – 1 week ago",
        timestamp: "1 week ago",
        type: "feature" as const,
      },
    ],
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url(/luggage-bg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        ...(window.innerWidth <= 640 && {
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F47bedcd915494a2c9d8c3faf11622396%2F3e3b118899d545fe8107825676bfdf48)",
        }),
      }}
    >
      <NotificationCenterComponent
        onBack={handleBack}
        onNotificationClick={handleNotificationClick}
        onNavItemClick={handleNavItemClick}
        notifications={notifications}
      />
    </div>
  );
};

export default NotificationCenter;
