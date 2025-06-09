import * as React from "react";
import { useState } from "react";
import { Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface FeedbackFormProps {
  onSubmit?: (data: {
    overallRating: number;
    ratings: {
      cleanliness: number;
      seatComfort: number;
      staffBehaviour: number;
      onboardingExperience: number;
    };
  }) => void;
  onBack?: () => void;
  tripDetails?: {
    transportCompany: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    from: string;
    to: string;
  };
  isLoading?: boolean;
  className?: string;
}

const FeedbackForm = React.forwardRef<HTMLDivElement, FeedbackFormProps>(
  (
    {
      onSubmit,
      onBack,
      tripDetails = {
        transportCompany: "MSS transport",
        departureTime: "3:05",
        arrivalTime: "7:30",
        duration: "7h 20m",
        from: "Chennai",
        to: "Kochi",
      },
      isLoading = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [overallRating, setOverallRating] = useState(0);
    const [ratings, setRatings] = useState({
      cleanliness: 0,
      seatComfort: 0,
      staffBehaviour: 0,
      onboardingExperience: 0,
    });

    const emojiRatings = [
      { value: 1, emoji: "😞", bg: "bg-red-100" },
      { value: 2, emoji: "😐", bg: "bg-orange-100" },
      { value: 3, emoji: "🙂", bg: "bg-yellow-100" },
      { value: 4, emoji: "😊", bg: "bg-lime-100" },
      { value: 5, emoji: "😆", bg: "bg-green-100" },
    ];

    const categories = [
      { key: "cleanliness", label: "Cleanliness" },
      { key: "seatComfort", label: "Seat comfort" },
      { key: "staffBehaviour", label: "Staff behaviour" },
      { key: "onboardingExperience", label: "Onboarding experience" },
    ];

    const handleRatingChange = (category: string, rating: number) => {
      setRatings((prev) => ({
        ...prev,
        [category]: rating,
      }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (onSubmit && overallRating > 0) {
        onSubmit({
          overallRating,
          ratings,
        });
      }
    };

    const renderStars = (rating: number, onRate: (rating: number) => void) => {
      return (
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => onRate(star)}
              className="p-0"
            >
              <Star
                className={cn(
                  "h-4 w-4 transition-colors",
                  star <= rating
                    ? "fill-orange-400 text-orange-400"
                    : "text-gray-300",
                )}
              />
            </button>
          ))}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-md mx-auto h-screen bg-white font-inter flex flex-col",
          className,
        )}
        {...props}
      >
        {/* Status Bar */}
        <div className="bg-gradient-to-r from-[#F7960F] to-[#FF8C00] text-white px-4 py-2 flex justify-between items-center text-sm font-medium flex-shrink-0">
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
        <div className="bg-gradient-to-r from-[#F7960F] to-[#FF8C00] text-white px-4 py-4 flex-shrink-0">
          <div className="flex items-center">
            <button
              onClick={onBack}
              className="mr-4 p-1 hover:bg-white/10 rounded transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-semibold">Feedback</h1>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 bg-white overflow-y-auto">
          <div className="p-4">
            {/* Happy Emoji with Stars */}
            <div className="text-center mb-4">
              <div className="relative inline-block">
                <div className="text-5xl mb-3">😊</div>
                <div className="absolute -top-1 -left-1 text-orange-400">
                  <Star className="h-3 w-3 fill-current" />
                </div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-orange-400">
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <div className="absolute -top-1 -right-1 text-orange-400">
                  <Star className="h-3 w-3 fill-current" />
                </div>
              </div>
            </div>

            {/* Question */}
            <div className="text-center mb-4">
              <h2 className="text-gray-600 text-base mb-4">
                How was your travel experience?
              </h2>
              <div className="flex justify-center gap-2 mb-6">
                {emojiRatings.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setOverallRating(item.value)}
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all",
                      overallRating === item.value
                        ? `${item.bg} ring-2 ring-orange-400 scale-110`
                        : "bg-orange-50 hover:bg-orange-100",
                    )}
                  >
                    {item.emoji}
                  </button>
                ))}
              </div>
            </div>

            {/* Trip Details Card */}
            <div className="bg-gray-50 rounded-xl p-3 mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">MSS</span>
                </div>
                <span className="font-medium text-sm">
                  {tripDetails.transportCompany}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="text-center">
                  <div className="font-bold text-base">
                    {tripDetails.departureTime}
                  </div>
                  <div className="text-gray-600">{tripDetails.from}</div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                    {tripDetails.duration}
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-base">
                    {tripDetails.arrivalTime}
                  </div>
                  <div className="text-gray-600">{tripDetails.to}</div>
                </div>
              </div>
            </div>

            {/* Rating Categories */}
            <div className="space-y-3 mb-6">
              {categories.map((category) => (
                <div
                  key={category.key}
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-700 font-medium text-sm">
                    {category.label}
                  </span>
                  {renderStars(
                    ratings[category.key as keyof typeof ratings],
                    (rating) => handleRatingChange(category.key, rating),
                  )}
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="pb-4">
              <Button
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading || overallRating === 0}
                className="w-full h-12 bg-gradient-to-r from-[#F7960F] to-[#FF8C00] hover:from-orange-600 hover:to-orange-700 text-white rounded-xl disabled:opacity-50"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

FeedbackForm.displayName = "FeedbackForm";

export { FeedbackForm };
