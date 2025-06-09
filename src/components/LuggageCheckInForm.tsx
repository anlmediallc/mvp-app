import * as React from "react";
import { useState } from "react";
import { ArrowLeft, Upload, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export interface LuggageCheckInFormProps {
  onSubmit?: (data: {
    luggageType: string;
    weight: string;
    specialInstructions: string;
    imageFile?: File;
    confirmsGuidelines: boolean;
  }) => void;
  onBack?: () => void;
  luggageTypeError?: string;
  weightError?: string;
  imageError?: string;
  guidelinesError?: string;
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
      guidelinesError,
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
    const [confirmsGuidelines, setConfirmsGuidelines] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (onSubmit) {
        onSubmit({
          luggageType,
          weight,
          specialInstructions,
          imageFile: imageFile || undefined,
          confirmsGuidelines,
        });
      }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setImageFile(file);
      }
    };

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
            <h1 className="text-xl font-semibold">Luggage Check-In</h1>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 bg-white rounded-t-3xl -mt-3 relative z-10 p-6 overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Luggage Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Luggage Type
              </label>
              <Select value={luggageType} onValueChange={setLuggageType}>
                <SelectTrigger
                  className={cn(
                    "h-12 rounded-xl border-gray-200",
                    luggageTypeError ? "border-red-500" : "",
                  )}
                >
                  <SelectValue placeholder="Suitcase" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="suitcase">Suitcase</SelectItem>
                  <SelectItem value="backpack">Backpack</SelectItem>
                  <SelectItem value="duffel-bag">Duffel Bag</SelectItem>
                  <SelectItem value="travel-bag">Travel Bag</SelectItem>
                  <SelectItem value="sports-equipment">
                    Sports Equipment
                  </SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {luggageTypeError && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>{luggageTypeError}</span>
                </div>
              )}
            </div>

            {/* Luggage Weight */}
            <div className="space-y-2">
              <label
                htmlFor="weight"
                className="text-sm font-medium text-gray-700"
              >
                Luggage Weight
              </label>
              <Input
                id="weight"
                type="number"
                placeholder="Enter weight (in kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className={cn(
                  "h-12 rounded-xl border-gray-200",
                  weightError ? "border-red-500" : "",
                )}
                min="0"
                max="50"
                step="0.1"
              />
              {weightError && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>{weightError}</span>
                </div>
              )}
            </div>

            {/* Special Instructions */}
            <div className="space-y-2">
              <label
                htmlFor="instructions"
                className="text-sm font-medium text-gray-700"
              >
                Luggage Type
              </label>
              <Textarea
                id="instructions"
                placeholder="Special instructions (fragile, oversized, etc.)..."
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="min-h-32 rounded-xl border-gray-200 resize-none"
                rows={4}
              />
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
                <input
                  type="file"
                  id="luggage-image"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="luggage-image"
                  className="cursor-pointer flex flex-col items-center gap-3"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Upload className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <span className="text-orange-500 font-medium">
                      Click to Upload
                    </span>
                    <span className="text-gray-600 ml-1">
                      Upload Image of Luggage
                    </span>
                  </div>
                  <span className="text-gray-500 text-sm">
                    (Max. File size: 25 MB)
                  </span>
                </label>
                {imageFile && (
                  <div className="mt-3 text-sm text-green-600">
                    ✓ {imageFile.name} uploaded
                  </div>
                )}
              </div>
              {imageError && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>{imageError}</span>
                </div>
              )}
            </div>

            {/* Confirmation Checkbox */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="guidelines"
                  checked={confirmsGuidelines}
                  onCheckedChange={(checked) =>
                    setConfirmsGuidelines(checked as boolean)
                  }
                  className="mt-0.5"
                />
                <label
                  htmlFor="guidelines"
                  className="text-sm text-gray-700 leading-relaxed"
                >
                  I Confirm My Luggage Meets Size And Weight Guidelines.
                </label>
              </div>
              {guidelinesError && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>{guidelinesError}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1 h-12 rounded-xl border-gray-300 text-gray-700"
                disabled={isLoading}
              >
                Add Luggage
              </Button>
              <Button
                type="submit"
                disabled={isLoading || !confirmsGuidelines}
                className="flex-1 h-12 bg-gradient-to-r from-[#F7960F] to-[#FF8C00] hover:from-orange-600 hover:to-orange-700 text-white rounded-xl disabled:opacity-50"
              >
                {isLoading ? "Adding..." : "Add Luggage"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  },
);

LuggageCheckInForm.displayName = "LuggageCheckInForm";

export { LuggageCheckInForm };
