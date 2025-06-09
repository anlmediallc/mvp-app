import * as React from "react";
import { useState } from "react";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface ReportProblemFormProps {
  onSubmit?: (data: { issueType: string; details: string }) => void;
  onBack?: () => void;
  issueTypeError?: string;
  detailsError?: string;
  isLoading?: boolean;
  className?: string;
}

const ReportProblemForm = React.forwardRef<
  HTMLDivElement,
  ReportProblemFormProps
>(
  (
    {
      onSubmit,
      onBack,
      issueTypeError,
      detailsError,
      isLoading = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [issueType, setIssueType] = useState("");
    const [details, setDetails] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (onSubmit) {
        onSubmit({
          issueType,
          details,
        });
      }
    };

    const issueTypes = [
      "Delay",
      "Vehicle Condition",
      "Staff Behavior",
      "Safety Concern",
      "Overcharging",
      "Lost Item",
      "Accessibility Issue",
      "Route Problem",
      "Booking Issue",
      "Other",
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
            <h1 className="text-xl font-semibold">Report a problem</h1>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 bg-white rounded-t-3xl -mt-3 relative z-10 p-6 overflow-y-auto">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 h-full flex flex-col"
          >
            {/* Issue Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Issue Type
              </label>
              <Select value={issueType} onValueChange={setIssueType}>
                <SelectTrigger
                  className={cn(
                    "h-12 rounded-xl border-gray-200",
                    issueTypeError ? "border-red-500" : "",
                  )}
                >
                  <SelectValue placeholder="Delay" />
                </SelectTrigger>
                <SelectContent>
                  {issueTypes.map((type) => (
                    <SelectItem
                      key={type}
                      value={type.toLowerCase().replace(" ", "-")}
                    >
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {issueTypeError && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>{issueTypeError}</span>
                </div>
              )}
            </div>

            {/* Details Text Area */}
            <div className="space-y-2 flex-1 flex flex-col">
              <Textarea
                placeholder="Enter additional details..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className={cn(
                  "flex-1 min-h-64 rounded-xl border-gray-200 resize-none",
                  detailsError ? "border-red-500" : "",
                )}
                rows={10}
              />
              {detailsError && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>{detailsError}</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isLoading || !issueType}
                className="w-full h-12 bg-gradient-to-r from-[#F7960F] to-[#FF8C00] hover:from-orange-600 hover:to-orange-700 text-white rounded-xl disabled:opacity-50"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  },
);

ReportProblemForm.displayName = "ReportProblemForm";

export { ReportProblemForm };
