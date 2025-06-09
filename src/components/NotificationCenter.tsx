import * as React from "react";
import { ArrowLeft, Clock, Home, Calendar, Users, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface NotificationItem {
  id: string;
  title: string;
  message?: string;
  timestamp: string;
  type: "delay" | "reminder" | "booking" | "feature" | "service";
  isRead?: boolean;
}

export interface NotificationCenterProps {
  onBack?: () => void;
  onNotificationClick?: (notification: NotificationItem) => void;
  onNavItemClick?: (item: string) => void;
  notifications?: {
    today: NotificationItem[];
    recent: NotificationItem[];
  };
  className?: string;
}

const NotificationCenter = React.forwardRef<
  HTMLDivElement,
  NotificationCenterProps
>(
  (
    {
      onBack,
      onNotificationClick,
      onNavItemClick,
      notifications = {
        today: [
          {
            id: "1",
            title: "Your bus is delayed by 15 minutes",
            message: "MSS Transport – 20 min ago",
            timestamp: "20 min ago",
            type: "delay",
          },
          {
            id: "2",
            title: "Trip to Kochi is scheduled today at 3:05 PM",
            message: "Reminder – 1 hr ago",
            timestamp: "1 hr ago",
            type: "reminder",
          },
        ],
        recent: [
          {
            id: "3",
            title: "Complete Your Booking",
            message:
              "Your booking is almost complete. Continue the process to confirm your seat – 1 day ago",
            timestamp: "1 day ago",
            type: "booking",
          },
          {
            id: "4",
            title: "Wi-Fi is available on your bus",
            message: "MSS Transport – 2 days ago",
            timestamp: "2 days ago",
            type: "service",
          },
          {
            id: "5",
            title: "New App Features",
            message: "Check out the latest additions we've made! – 1 week ago",
            timestamp: "1 week ago",
            type: "feature",
          },
        ],
      },
      className,
      ...props
    },
    ref,
  ) => {
    const handleNotificationClick = (notification: NotificationItem) => {
      if (onNotificationClick) {
        onNotificationClick(notification);
      }
    };

    const handleNavClick = (item: string) => {
      if (onNavItemClick) {
        onNavItemClick(item);
      }
    };

    const NotificationItem = ({
      notification,
    }: {
      notification: NotificationItem;
    }) => (
      <button
        onClick={() => handleNotificationClick(notification)}
        className="w-full flex items-start gap-2 p-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
      >
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <Clock className="h-4 w-4 text-gray-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight">
            {notification.title}
          </h3>
          {notification.message && (
            <p className="text-gray-600 text-xs mt-0.5 leading-tight">
              {notification.message}
            </p>
          )}
        </div>
      </button>
    );

    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-md mx-auto h-screen bg-white font-inter overflow-hidden relative",
          className,
        )}
        {...props}
      >
        {/* Header */}
        <div
          className="bg-gradient-to-r from-[#F7960F] to-[#FF8C00] text-white px-4 py-4 pb-8"
          style={{
            ...(window.innerWidth <= 640 && {
              backgroundImage:
                "url(https://cdn.builder.io/api/v1/image/assets%2F47bedcd915494a2c9d8c3faf11622396%2F6ee3345d560641f1bc37df16062b7293)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }),
          }}
        >
          <div className="flex items-center mb-6">
            <button
              onClick={onBack}
              className="mr-4 p-1 hover:bg-white/10 rounded transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-semibold">Notification Center</h1>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white rounded-t-3xl -mt-3 relative z-10 p-4 pb-24 overflow-y-auto">
          {/* Today Section */}
          {notifications.today.length > 0 && (
            <div className="mb-4">
              <h2 className="text-base font-semibold text-gray-900 mb-2">
                Today
              </h2>
              <div className="space-y-1">
                {notifications.today.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Recent Section */}
          {notifications.recent.length > 0 && (
            <div>
              <h2 className="text-base font-semibold text-gray-900 mb-2">
                Recent
              </h2>
              <div className="space-y-1">
                {notifications.recent.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {notifications.today.length === 0 &&
            notifications.recent.length === 0 && (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  No notifications
                </h3>
                <p className="text-gray-600 text-sm">
                  You're all caught up! Check back later for updates.
                </p>
              </div>
            )}
        </div>

        {/* Chat Support Button */}
        <div className="absolute bottom-20 right-4">
          <Button
            size="icon"
            className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F7960F] to-[#FF8C00] hover:from-orange-600 hover:to-orange-700 text-white shadow-lg"
          >
            <span className="text-lg">💬</span>
          </Button>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-2">
          <div className="flex justify-around items-center">
            <button
              onClick={() => handleNavClick("home")}
              className="flex flex-col items-center gap-1 p-2 transition-colors"
            >
              <Home className="h-6 w-6 text-orange-500" />
            </button>
            <button
              onClick={() => handleNavClick("calendar")}
              className="flex flex-col items-center gap-1 p-2 transition-colors"
            >
              <Calendar className="h-6 w-6 text-gray-400" />
            </button>
            <button
              onClick={() => handleNavClick("bookings")}
              className="flex flex-col items-center gap-1 p-2 transition-colors"
            >
              <Calendar className="h-6 w-6 text-gray-400" />
            </button>
            <button
              onClick={() => handleNavClick("profile")}
              className="flex flex-col items-center gap-1 p-2 transition-colors"
            >
              <User className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    );
  },
);

NotificationCenter.displayName = "NotificationCenter";

export { NotificationCenter };
