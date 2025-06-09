import * as React from "react";
import { useState } from "react";
import { ArrowLeft, Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface HelpCenterProps {
  onBack?: () => void;
  onCategoryClick?: (category: string) => void;
  onSearch?: (query: string) => void;
  className?: string;
}

const HelpCenter = React.forwardRef<HTMLDivElement, HelpCenterProps>(
  ({ onBack, onCategoryClick, onSearch, className, ...props }, ref) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      setSearchQuery(query);
      if (onSearch) {
        onSearch(query);
      }
    };

    const handleCategoryClick = (categoryId: string) => {
      if (onCategoryClick) {
        onCategoryClick(categoryId);
      }
    };

    const categories = [
      {
        id: "tickets-payments",
        title: "Tickets and payments",
        icon: "🎫",
      },
      {
        id: "travel-information",
        title: "Travel information",
        icon: "🗺️",
      },
      {
        id: "safety",
        title: "Safety",
        icon: "🛡️",
      },
      {
        id: "report-problem",
        title: "Report a problem",
        icon: "⚠️",
      },
    ];

    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-md mx-auto h-screen bg-white font-inter overflow-hidden",
          className,
        )}
        {...props}
      >
        {/* Status Bar */}
        <div className="text-black px-4 py-2 flex justify-between items-center text-sm font-medium bg-white">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              <div className="w-1 h-3 bg-black rounded-full"></div>
              <div className="w-1 h-3 bg-black rounded-full"></div>
              <div className="w-1 h-3 bg-black rounded-full"></div>
              <div className="w-1 h-3 bg-black/70 rounded-full"></div>
            </div>
            <svg className="w-4 h-4 ml-1" fill="black" viewBox="0 0 24 24">
              <path d="M2 17h20v2H2v-2zm1.15-4.05L4 11.47l.85 1.48H6l-.85-1.48zM9 12.5h6v1H9v-1zm8.85 1.48L18.7 12l.85 1.48H18l.85-1.48z" />
            </svg>
            <div className="w-6 h-3 bg-black rounded-sm ml-1"></div>
          </div>
        </div>

        {/* Header */}
        <div className="bg-white px-4 py-4 border-b border-gray-100">
          <div className="flex items-center">
            <button
              onClick={onBack}
              className="mr-4 p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <ArrowLeft className="h-6 w-6 text-gray-700" />
            </button>
            <h1 className="text-xl font-semibold text-gray-900">Help Center</h1>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white p-4 overflow-y-auto">
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="h-12 pl-10 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-gray-300"
            />
          </div>

          {/* Help Categories */}
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 rounded-lg transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{category.icon}</span>
                  <span className="text-gray-900 font-medium">
                    {category.title}
                  </span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

HelpCenter.displayName = "HelpCenter";

export { HelpCenter };
