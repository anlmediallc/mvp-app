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
        className="w-full flex items-start gap-3 p-4 text-left hover:bg-gray-50 rounded-lg transition-colors"
      >
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <Clock className="h-5 w-5 text-gray-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-base leading-snug">
            {notification.title}
          </h3>
          {notification.message && (
            <p className="text-gray-600 text-sm mt-1 leading-relaxed">
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
        {/* Status Bar */}
        <div className="bg-gradient-to-r from-[#F7960F] to-[#FF8C00] text-white px-4 py-2 flex justify-between items-center text-sm font-medium">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              <div className="w-1 h-3 bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-white/70 rounded-full"></div>
            </div>
            <svg className="w-4 h-4 ml-1" fill="white" viewBox="0 0 24 24">
              <path d="M2 17h20v2H2v-2zm1.15-4.05L4 11.47l.85 1.48H6l-.85-1.48zM9 12.5h6v1H9v-1zm8.85 1.48L18.7 12l.85 1.48H18l.85-1.48z" />
            </svg>
            <div className="w-6 h-3 bg-white rounded-sm ml-1"></div>
          </div>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-[#F7960F] to-[#FF8C00] text-white px-4 py-4 pb-6">
          <div className="flex items-center">
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
        <div className="flex-1 bg-white rounded-t-3xl -mt-3 relative z-10 p-6 pb-24 overflow-y-auto">
          {/* Today Section */}
          {notifications.today.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Today
              </h2>
              <div className="space-y-2">
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
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Recent
              </h2>
              <div className="space-y-2">
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
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No notifications
                </h3>
                <p className="text-gray-600">
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
