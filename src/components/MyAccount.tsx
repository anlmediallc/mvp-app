import * as React from "react";
import {
  ArrowLeft,
  User,
  Lock,
  Bell,
  Shield,
  ChevronRight,
  Home,
  Calendar,
  Users,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface MyAccountProps {
  onBack?: () => void;
  onMenuItemClick?: (item: string) => void;
  onNavItemClick?: (item: string) => void;
  userInfo?: {
    name: string;
    phone: string;
    avatar?: string;
  };
  className?: string;
}

const MyAccount = React.forwardRef<HTMLDivElement, MyAccountProps>(
  (
    {
      onBack,
      onMenuItemClick,
      onNavItemClick,
      userInfo = {
        name: "Dinesh VG",
        phone: "7598113129",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      },
      className,
      ...props
    },
    ref,
  ) => {
    const handleMenuClick = (item: string) => {
      if (onMenuItemClick) {
        onMenuItemClick(item);
      }
    };

    const handleNavClick = (item: string) => {
      if (onNavItemClick) {
        onNavItemClick(item);
      }
    };

    const menuItems = [
      {
        id: "personal-info",
        icon: User,
        title: "Personal Info",
      },
      {
        id: "change-password",
        icon: Lock,
        title: "Change Password",
      },
      {
        id: "notification-preferences",
        icon: Bell,
        title: "Notification Preferences",
      },
      {
        id: "privacy-settings",
        icon: Shield,
        title: "Privacy Settings",
      },
    ];

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

        {/* Header with Profile */}
        <div className="bg-gradient-to-r from-[#F7960F] to-[#FF8C00] text-white px-4 py-4 pb-8">
          <div className="flex items-center mb-6">
            <button
              onClick={onBack}
              className="mr-4 p-1 hover:bg-white/10 rounded transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-semibold">My Account</h1>
          </div>

          {/* User Profile Section */}
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16 border-2 border-white/20">
              <AvatarImage src={userInfo.avatar} alt={userInfo.name} />
              <AvatarFallback className="bg-white/20 text-white text-lg font-semibold">
                {userInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold text-white">
                {userInfo.name}
              </h2>
              <p className="text-white/90 text-lg">{userInfo.phone}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white rounded-t-3xl -mt-4 relative z-10 p-6 pb-24">
          {/* Personalize Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Personalize
            </h3>
            <div className="space-y-1">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleMenuClick(item.id)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-900 font-medium">
                        {item.title}
                      </span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </button>
                );
              })}
            </div>
          </div>
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

MyAccount.displayName = "MyAccount";

export { MyAccount };
