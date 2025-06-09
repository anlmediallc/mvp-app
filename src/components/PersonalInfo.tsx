import * as React from "react";
import { useState } from "react";
import {
  ArrowLeft,
  Camera,
  Eye,
  EyeOff,
  AlertCircle,
  Home,
  Calendar,
  Users,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface PersonalInfoProps {
  onBack?: () => void;
  onSave?: (data: {
    name: string;
    email: string;
    password: string;
    phone: string;
    countryCode: string;
    avatar?: File;
  }) => void;
  onNavItemClick?: (item: string) => void;
  userInfo?: {
    name: string;
    email: string;
    phone: string;
    countryCode: string;
    avatar?: string;
  };
  nameError?: string;
  emailError?: string;
  passwordError?: string;
  phoneError?: string;
  isLoading?: boolean;
  className?: string;
}

const PersonalInfo = React.forwardRef<HTMLDivElement, PersonalInfoProps>(
  (
    {
      onBack,
      onSave,
      onNavItemClick,
      userInfo = {
        name: "James Rodriguez",
        email: "Jamesrodriguez@gmail.com",
        phone: "7598113186",
        countryCode: "+91",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      },
      nameError,
      emailError,
      passwordError,
      phoneError,
      isLoading = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [name, setName] = useState(userInfo.name);
    const [email, setEmail] = useState(userInfo.email);
    const [password, setPassword] = useState("**********");
    const [phone, setPhone] = useState(userInfo.phone);
    const [countryCode, setCountryCode] = useState(userInfo.countryCode);
    const [showPassword, setShowPassword] = useState(false);
    const [avatarFile, setAvatarFile] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (onSave) {
        onSave({
          name,
          email,
          password,
          phone,
          countryCode,
          avatar: avatarFile || undefined,
        });
      }
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setAvatarFile(file);
      }
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const handleNavClick = (item: string) => {
      if (onNavItemClick) {
        onNavItemClick(item);
      }
    };

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
            <h1 className="text-xl font-semibold">My Account</h1>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white rounded-t-3xl -mt-3 relative z-10 p-6 pb-24 overflow-y-auto">
          {/* Profile Photo Section */}
          <div
            className="flex justify-center mb-6 -mt-12"
            style={{
              ...(window.innerWidth <= 640 && {
                margin: "-4px 0 -2px",
                padding: "8px 0 10px",
              }),
            }}
          >
            <div className="relative">
              <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
                <AvatarImage
                  src={
                    avatarFile
                      ? URL.createObjectURL(avatarFile)
                      : userInfo.avatar
                  }
                  alt={name}
                />
                <AvatarFallback className="bg-gray-200 text-gray-700 text-lg font-semibold">
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Camera className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name Field */}
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="text-xs font-medium text-gray-700"
              >
                Name
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={cn(
                  "h-8 rounded-lg border-gray-200 text-sm",
                  nameError ? "border-red-500" : "",
                )}
                required
              />
              {nameError && (
                <div className="flex items-center gap-1 text-red-500 text-xs">
                  <AlertCircle className="h-3 w-3" />
                  <span>{nameError}</span>
                </div>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-xs font-medium text-gray-700"
              >
                E mail address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={cn(
                  "h-8 rounded-lg border-gray-200 text-sm",
                  emailError ? "border-red-500" : "",
                )}
                required
              />
              {emailError && (
                <div className="flex items-center gap-1 text-red-500 text-xs">
                  <AlertCircle className="h-3 w-3" />
                  <span>{emailError}</span>
                </div>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <label
                htmlFor="password"
                className="text-xs font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={cn(
                    "h-8 rounded-lg border-gray-200 pr-8 text-sm",
                    passwordError ? "border-red-500" : "",
                  )}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-3 w-3" />
                  ) : (
                    <Eye className="h-3 w-3" />
                  )}
                </button>
              </div>
              {passwordError && (
                <div className="flex items-center gap-1 text-red-500 text-xs">
                  <AlertCircle className="h-3 w-3" />
                  <span>{passwordError}</span>
                </div>
              )}
            </div>

            {/* Phone Number Field */}
            <div className="space-y-1">
              <label
                htmlFor="phone"
                className="text-xs font-medium text-gray-700"
              >
                Phone number
              </label>
              <div className="flex gap-1">
                <Select value={countryCode} onValueChange={setCountryCode}>
                  <SelectTrigger className="w-16 h-8 rounded-lg border-gray-200 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+91">🇮🇳 +91</SelectItem>
                    <SelectItem value="+1">🇺🇸 +1</SelectItem>
                    <SelectItem value="+44">🇬🇧 +44</SelectItem>
                    <SelectItem value="+86">🇨🇳 +86</SelectItem>
                    <SelectItem value="+49">🇩🇪 +49</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={cn(
                    "flex-1 h-8 rounded-lg border-gray-200 text-sm",
                    phoneError ? "border-red-500" : "",
                  )}
                  placeholder="Phone number"
                  required
                />
              </div>
              {phoneError && (
                <div className="flex items-center gap-1 text-red-500 text-xs">
                  <AlertCircle className="h-3 w-3" />
                  <span>{phoneError}</span>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Chat Support Button */}
        <div className="absolute bottom-24 right-4">
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

PersonalInfo.displayName = "PersonalInfo";

export { PersonalInfo };
