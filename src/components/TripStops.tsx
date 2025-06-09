import React from "react";
import { ArrowLeft, ExternalLink, MoreHorizontal } from "lucide-react";

interface TripStopsProps {
  onBack?: () => void;
  onOptionsMenu?: () => void;
}

interface StopData {
  id: number;
  name: string;
  time: string;
  isFirst?: boolean;
  isLast?: boolean;
}

export default function TripStops({ onBack, onOptionsMenu }: TripStopsProps) {
  // Sample stops data - in real app this would come from props or API
  const stops: StopData[] = [
    { id: 1, name: "Chennai, Nungambakkam", time: "3:05 PM", isFirst: true },
    { id: 2, name: "Chennai, T. Nagar", time: "3:25 PM" },
    { id: 3, name: "Chennai, Guindy", time: "3:45 PM" },
    { id: 4, name: "Tindivanam", time: "4:15 PM" },
    { id: 5, name: "Villupuram", time: "4:45 PM" },
    { id: 6, name: "Cuddalore", time: "5:15 PM" },
    { id: 7, name: "Chidambaram", time: "5:45 PM" },
    { id: 8, name: "Mayiladuthurai", time: "6:15 PM" },
    { id: 9, name: "Kumbakonam", time: "6:45 PM" },
    { id: 10, name: "Thanjavur", time: "7:15 PM" },
    { id: 11, name: "Trichy", time: "7:45 PM" },
    { id: 12, name: "Karur", time: "8:15 PM" },
    { id: 13, name: "Tirupur", time: "8:45 PM" },
    { id: 14, name: "Coimbatore", time: "9:15 PM" },
    {
      id: 15,
      name: "Kochi, Bus station ernakulam",
      time: "10:30 PM",
      isLast: true,
    },
  ];

  return (
    <div className="relative flex h-screen w-full max-w-md mx-auto flex-col overflow-hidden bg-white font-inter">
      {/* Mobile Status Bar */}
      <div className="bg-gradient-to-r from-[#F7960F] to-[#FF8C00] text-white px-4 py-2 flex justify-between items-center text-sm font-medium">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
          <svg className="w-4 h-4 ml-1" fill="white" viewBox="0 0 24 24">
            <path d="M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48L5.3 12H6c0-.55.45-1 1-1s1 .45 1 1h.7l.85 1.48L11 11.47l.85 1.48L12.7 12H13c0-.55.45-1 1-1s1 .45 1 1h.7l.85 1.48L17 11.47l.85 1.48L18.7 12H19c0-.55.45-1 1-1s1 .45 1 1h.7l.85 1.48L23 11.47V13H1v-1.53l.85 1.48L3 11.47l.85 1.48L4.7 12H5c0-.55.45-1 1-1s1 .45 1 1h.7z" />
          </svg>
          <div className="w-6 h-3 border border-white rounded-sm">
            <div className="w-4 h-full bg-white rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-[#F7960F] to-[#FF8C00] text-white px-4 py-4 flex items-center">
        <button onClick={onBack} className="mr-4 p-1">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold">Trip Details</h1>
      </div>

      {/* Content */}
      <div className="flex-1 bg-white overflow-y-auto scrollbar-hide pb-20">
        {/* Trip Info Card - Simplified */}
        <div className="bg-white p-4 border-b border-gray-100">
          {/* Transport Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">MSS</span>
              </div>
              <span className="font-semibold text-base">MSS transport</span>
            </div>
            <button className="p-1.5 bg-gray-800 rounded-full">
              <ExternalLink className="h-3 w-3 text-white" />
            </button>
          </div>

          {/* Trip Time Info */}
          <div className="flex items-center justify-between">
            <div className="text-center">
              <div className="text-2xl font-bold">3:05</div>
              <div className="text-gray-600 text-sm">Chennai</div>
            </div>
            <div className="flex-1 flex flex-col items-center mx-4">
              <div className="bg-gray-200 text-gray-600 px-3 py-0.5 rounded-full text-xs font-medium">
                7h 20m
              </div>
              <div className="w-full h-px bg-gray-300 mt-1"></div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">7:30</div>
              <div className="text-gray-600 text-sm">Kochi</div>
            </div>
          </div>
        </div>

        {/* All Stops Timeline */}
        <div className="px-4 py-2">
          <div className="space-y-3">
            {stops.map((stop, index) => (
              <div key={stop.id} className="flex items-start gap-3 relative">
                {/* Timeline Line */}
                {!stop.isLast && (
                  <div className="absolute left-[9px] top-4 w-px h-6 bg-orange-300"></div>
                )}

                {/* Stop Pin */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      stop.isFirst ? "bg-orange-600" : "bg-orange-500"
                    }`}
                  >
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Stop Info */}
                <div className="flex-1 pb-1">
                  <div className="font-semibold text-gray-900 text-sm">
                    {stop.name}
                  </div>
                  <div className="text-gray-600 text-xs">{stop.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Chatbot Button */}
      <button
        onClick={onOptionsMenu}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-[#F7960F] to-[#FF8C00] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      >
        <svg
          className="h-7 w-7 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>
    </div>
  );
}
