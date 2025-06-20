import * as React from "react";
import { useState } from "react";
import { ArrowLeft, Upload, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export interface LuggageCheckInFormProps {
  onSubmit?: (data: {
    luggageType: string;
    weight: string;
    specialInstructions: string;
    imageFile: File | null;
  }) => void;
  onBack?: () => void;
  luggageTypeError?: string;
  weightError?: string;
  imageError?: string;
  isLoading?: boolean;
  className?: string;
}

const LuggageCheckInForm = React.forwardRef<
  HTMLDivElement,
  LuggageCheckInFormProps
>(
  (
    {
      onSubmit,
      onBack,
      luggageTypeError,
      weightError,
      imageError,
      isLoading = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [luggageType, setLuggageType] = useState("");
    const [weight, setWeight] = useState("");
    const [specialInstructions, setSpecialInstructions] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [agreedToGuidelines, setAgreedToGuidelines] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (onSubmit && luggageType && weight && agreedToGuidelines) {
        onSubmit({
          luggageType,
          weight,
          specialInstructions,
          imageFile,
        });
      }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setImageFile(file);
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
              marginBottom: "-4px",
              paddingBottom: "11px",
            }),
          }}
        >
          <div
            className="flex items-center mb-6"
            style={{
              ...(window.innerWidth <= 640 && {
                marginTop: "8px",
              }),
            }}
          >
            <button
              onClick={onBack}
              className="mr-4 p-1 hover:bg-white/10 rounded transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1
              className="text-xl font-semibold"
              style={{
                ...(window.innerWidth <= 640 && {
                  margin: "2px 0 0 33px",
                }),
              }}
            >
              Luggage Check-In
            </h1>
          </div>
        </div>

        {/* White Form Container */}
        <div
          className="flex-1 bg-white rounded-t-3xl -mt-4 relative z-10 p-6"
          style={{
            ...(window.innerWidth <= 640 && {
              marginBottom: "-4px",
            }),
          }}
        >
          <div className="h-full overflow-hidden">
            <button
              onClick={onBack}
              className="mr-4 p-1 hover:bg-white/10 rounded transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1
              className="text-xl font-semibold"
              style={{
                marginLeft: "37px",
              }}
            >
              Luggage Check-In
            </h1>
          </div>
        </div>

        {/* White Form Container */}
        <div className="flex-1 p-4">
          <div className="bg-white rounded-2xl p-4 h-full overflow-hidden shadow-lg">
            <form
              onSubmit={handleSubmit}
              className="space-y-3 h-full flex flex-col"
              style={{
                ...(window.innerWidth <= 640 && {
                  marginTop: "-2px",
                }),
              }}
            >
              {/* Luggage Type */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Luggage Type
                </label>
                <Select value={luggageType} onValueChange={setLuggageType}>
                  <SelectTrigger className="h-10 rounded-xl border-gray-300">
                    <SelectValue placeholder="Suitcase" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="suitcase">Suitcase</SelectItem>
                    <SelectItem value="backpack">Backpack</SelectItem>
                    <SelectItem value="duffel">Duffel Bag</SelectItem>
                    <SelectItem value="garment">Garment Bag</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {luggageTypeError && (
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>{luggageTypeError}</span>
                  </div>
                )}
              </div>

              {/* Luggage Weight */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Luggage Weight
                </label>
                <Input
                  type="text"
                  placeholder="Enter weight (in kg)"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className={cn(
                    "h-10 rounded-xl border-gray-300",
                    weightError && "border-red-500 focus:border-red-500",
                  )}
                />
                {weightError && (
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>{weightError}</span>
                  </div>
                )}
              </div>

              {/* Special Instructions */}
              <div className="space-y-1 flex-1">
                <label className="text-sm font-medium text-gray-700">
                  Luggage Type
                </label>
                <Textarea
                  placeholder="Special instructions (fragile, oversized, etc.)"
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  className="min-h-[80px] rounded-xl border-gray-300 resize-none"
                />
              </div>

              {/* Image Upload Area */}
              <div className="space-y-1">
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-1.5 text-center bg-gray-50">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="luggage-upload"
                  />
                  <label
                    htmlFor="luggage-upload"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <Upload className="h-6 w-6 text-orange-500 mb-1" />
                    <div className="text-orange-500 font-medium text-sm">
                      Click to Upload
                    </div>
                    <div className="text-gray-600 text-xs">
                      Upload Image of Luggage
                    </div>
                    <div className="text-gray-500 text-xs">
                      (Max file size 25 MB)
                    </div>
                  </label>
                  {imageFile && (
                    <div className="mt-1 text-xs text-gray-600">
                      Selected: {imageFile.name}
                    </div>
                  )}
                </div>
                {imageError && (
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>{imageError}</span>
                  </div>
                )}
              </div>

              {/* Guidelines Checkbox */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="guidelines"
                  checked={agreedToGuidelines}
                  onChange={(e) => setAgreedToGuidelines(e.target.checked)}
                  className="mt-0.5 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label htmlFor="guidelines" className="text-xs text-gray-600">
                  I Confirm My Luggage Meets Size And Weight Guidelines.
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 h-10 rounded-xl border-orange-500 text-orange-500 hover:bg-orange-50 text-sm"
                >
                  Add Luggage
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading || !agreedToGuidelines}
                  className="flex-1 h-10 bg-gradient-to-r from-[#F7960F] to-[#FF8C00] hover:from-orange-600 hover:to-orange-700 text-white rounded-xl disabled:opacity-50 text-sm"
                >
                  {isLoading ? "Adding..." : "Add Luggage"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  },
);

LuggageCheckInForm.displayName = "LuggageCheckInForm";

export { LuggageCheckInForm };
