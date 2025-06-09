import React, { useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Wifi,
  Bed,
  Zap,
  MapPin,
  Users,
  Luggage,
} from "lucide-react";
import { Button } from "./ui/button";

interface TripDetailsProps {
  onBack?: () => void;
  onViewStops?: () => void;
  onAddPassenger?: () => void;
  onAddLuggage?: () => void;
}

interface SeatData {
  id: string;
  row: string;
  number: number;
  status: "available" | "occupied" | "selected";
}

export default function TripDetails({
  onBack,
  onViewStops,
  onAddPassenger,
  onAddLuggage,
}: TripDetailsProps) {
  // Initialize seat data - 8 rows (A-H), 4 seats per row
  const initializeSeats = (): SeatData[] => {
    const seats: SeatData[] = [];
    const rows = ["C", "D", "E", "F", "G", "H"];

    rows.forEach((row, rowIndex) => {
      for (let seat = 1; seat <= 4; seat++) {
        const seatId = `${row}${seat}`;
        let status: "available" | "occupied" | "selected" = "available";

        // Set some seats as occupied for demo
        if (
          (row === "D" && (seat === 1 || seat === 2)) ||
          (row === "E" && seat === 1) ||
          (row === "F" && seat === 3)
        ) {
          status = "occupied";
        }

        seats.push({
          id: seatId,
          row,
          number: seat,
          status,
        });
      }
    });

    return seats;
  };

  const [seats, setSeats] = useState<SeatData[]>(initializeSeats());
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatClick = (seatId: string) => {
    const seat = seats.find((s) => s.id === seatId);
    if (!seat || seat.status === "occupied") return;

    setSeats((prevSeats) =>
      prevSeats.map((s) => {
        if (s.id === seatId) {
          const newStatus = s.status === "selected" ? "available" : "selected";
          if (newStatus === "selected") {
            setSelectedSeats((prev) => [...prev, seatId]);
          } else {
            setSelectedSeats((prev) => prev.filter((id) => id !== seatId));
          }
          return { ...s, status: newStatus };
        }
        return s;
      }),
    );
  };

  const getSeatStyle = (status: string) => {
    switch (status) {
      case "occupied":
        return "bg-gray-400 cursor-not-allowed";
      case "selected":
        return "bg-blue-500 text-white cursor-pointer";
      default:
        return "bg-gray-200 hover:bg-gray-300 cursor-pointer";
    }
  };

  const groupedSeats = seats.reduce(
    (acc, seat) => {
      if (!acc[seat.row]) acc[seat.row] = [];
      acc[seat.row].push(seat);
      return acc;
    },
    {} as Record<string, SeatData[]>,
  );

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
      <div className="flex-1 bg-gradient-to-br from-orange-500 to-orange-600 p-4 overflow-y-auto scrollbar-hide">
        {/* Trip Card */}
        <div className="bg-white rounded-2xl p-6 mb-4">
          {/* Transport Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MSS</span>
              </div>
              <span className="font-semibold text-lg">MSS transport</span>
            </div>
            <button className="p-2 bg-gray-800 rounded-full">
              <ExternalLink className="h-4 w-4 text-white" />
            </button>
          </div>

          {/* Trip Time Info */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold">3:05</div>
              <div className="text-gray-600">Chennai</div>
            </div>
            <div className="flex-1 flex flex-col items-center mx-4">
              <div className="bg-gray-200 text-gray-600 px-4 py-1 rounded-full text-sm font-medium">
                7h 20m
              </div>
              <div className="w-full h-px bg-gray-300 mt-2"></div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">7:30</div>
              <div className="text-gray-600">Kochi</div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-100 rounded-xl h-32 mb-6 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50"></div>
            <div className="relative text-gray-500 text-sm">Route Map</div>
            <svg
              className="absolute bottom-2 left-4 w-16 h-12 text-blue-400"
              fill="currentColor"
              viewBox="0 0 64 48"
            >
              <path
                d="M8 32c8-8 16-8 24 0s16 8 24 0M8 24c8-8 16-8 24 0s16 8 24 0"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          {/* Amenities */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Wifi className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-gray-600">Wi-Fi</span>
            </div>
            <div className="flex items-center gap-2">
              <Bed className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-gray-600">Sleeping berth</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-gray-600">Charging</span>
            </div>
          </div>
        </div>

        {/* Boarding & Drop-off */}
        <div className="bg-white rounded-2xl p-6 mb-4">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-4">
                Boarding & Drop-off
              </h3>

              {/* Boarding Timeline */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <div className="w-px h-8 bg-orange-300"></div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Chennai, Nungambakkam</div>
                    <div className="text-gray-600 text-sm">3:05 PM</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <div className="w-px h-8 bg-orange-300"></div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">
                      Kochi, Bus station ernakulam
                    </div>
                    <div className="text-gray-600 text-sm">3:05 PM</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">
                      Kochi, Bus station ernakulam
                    </div>
                    <div className="text-gray-600 text-sm">3:05 PM</div>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                className="mt-4 w-auto text-blue-600 border-blue-600 hover:bg-blue-50"
                onClick={onViewStops}
              >
                <div className="flex items-center gap-2">
                  View all stops
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </div>
              </Button>
            </div>

            {/* Bus Seat Layout */}
            <div className="ml-6">
              <h4 className="font-semibold mb-3">Bus Seat:</h4>
              <div className="space-y-1">
                {Object.entries(groupedSeats).map(([row, rowSeats]) => (
                  <div key={row} className="flex items-center gap-1">
                    <span className="text-xs text-gray-500 w-3">{row}</span>
                    <div className="flex gap-1">
                      {rowSeats
                        .sort((a, b) => a.number - b.number)
                        .map((seat) => (
                          <button
                            key={seat.id}
                            onClick={() => handleSeatClick(seat.id)}
                            disabled={seat.status === "occupied"}
                            className={`w-6 h-6 rounded text-xs font-medium transition-colors ${getSeatStyle(seat.status)}`}
                          >
                            {seat.number}
                          </button>
                        ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Seat Legend */}
              <div className="flex items-center gap-4 mt-3 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-gray-400 rounded"></div>
                  <span>3</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-gray-200 rounded"></div>
                  <span>On</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seat Selection */}
        <div className="bg-white rounded-2xl p-6 mb-20">
          <h3 className="font-semibold text-lg mb-4">Seat selection</h3>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 py-3"
              onClick={onAddPassenger}
            >
              <div className="flex items-center justify-center gap-2">
                <Users className="h-5 w-5 text-gray-600" />
                <span>Add Passenger</span>
              </div>
            </Button>
            <Button
              variant="outline"
              className="flex-1 py-3 relative"
              onClick={onAddLuggage}
            >
              <div className="flex items-center justify-center gap-2">
                <Luggage className="h-5 w-5 text-gray-600" />
                <span>Add Luggage</span>
              </div>
              {/* Orange notification dot */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">•••</span>
              </div>
            </Button>
          </div>

          {selectedSeats.length > 0 && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">
                Selected seats: {selectedSeats.join(", ")}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
