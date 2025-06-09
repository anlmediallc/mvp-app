import React, { useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Wifi,
  Bed,
  Zap,
  UserPlus,
  Package,
} from "lucide-react";

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
  // Initialize seat data - 6 rows (C-H), 4 seats per row
  const initializeSeats = (): SeatData[] => {
    const seats: SeatData[] = [];
    const rows = ["C", "D", "E", "F", "G", "H"];

    rows.forEach((row) => {
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
    setSeats((prevSeats) =>
      prevSeats.map((seat) => {
        if (seat.id === seatId && seat.status !== "occupied") {
          const newStatus =
            seat.status === "selected" ? "available" : "selected";

          if (newStatus === "selected") {
            setSelectedSeats((prev) => [...prev, seatId]);
          } else {
            setSelectedSeats((prev) => prev.filter((id) => id !== seatId));
          }

          return { ...seat, status: newStatus };
        }
        return seat;
      }),
    );
  };

  const getSeatStyle = (status: string) => {
    switch (status) {
      case "occupied":
        return "bg-gray-400 text-white cursor-not-allowed";
      case "selected":
        return "bg-orange-500 text-white";
      default:
        return "bg-gray-200 text-gray-700 hover:bg-gray-300";
    }
  };

  // Group seats by row for display
  const groupedSeats = seats.reduce(
    (acc, seat) => {
      if (!acc[seat.row]) {
        acc[seat.row] = [];
      }
      acc[seat.row].push(seat);
      return acc;
    },
    {} as { [key: string]: SeatData[] },
  );

  const handleViewAllStops = () => {
    if (onViewStops) {
      onViewStops();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto h-screen bg-white font-inter overflow-hidden relative">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#F7960F] to-[#FF8C00] text-white px-4 py-2 flex items-center">
        <button
          onClick={onBack}
          className="mr-3 p-1 hover:bg-white/10 rounded transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-semibold">Trip Details</h1>
      </div>

      <div className="flex-1 bg-gradient-to-br from-orange-500 to-orange-600 p-2 overflow-y-auto scrollbar-hide">
        {/* Trip Card - Upper Part */}
        <div className="bg-white rounded-2xl p-2 mb-2">
          {/* Transport Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">MSS</span>
              </div>
              <span className="font-semibold text-sm">MSS transport</span>
            </div>
            <button className="p-1 bg-gray-800 rounded-full">
              <ExternalLink className="h-3 w-3 text-white" />
            </button>
          </div>

          {/* Trip Time Info */}
          <div className="flex items-center justify-between mb-2">
            <div className="text-center">
              <div className="text-xl font-bold">3:05</div>
              <div className="text-gray-600 text-xs">Chennai</div>
            </div>
            <div className="flex-1 flex flex-col items-center mx-2">
              <div className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full text-xs font-medium">
                7h 20m
              </div>
              <div className="w-full h-px bg-gray-300 mt-1"></div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold">7:30</div>
              <div className="text-gray-600 text-xs">Kochi</div>
            </div>
          </div>

          {/* Route Map */}
          <div className="bg-gray-50 rounded-lg h-16 mb-2 relative overflow-hidden border border-gray-200">
            {/* Map background pattern */}
            <div className="absolute inset-0">
              {/* Grid pattern to simulate map */}
              <div className="absolute inset-0 opacity-10">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={`v-${i}`}
                    className="absolute bg-gray-300"
                    style={{
                      left: `${i * 8.33}%`,
                      top: 0,
                      width: "1px",
                      height: "100%",
                    }}
                  />
                ))}
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={`h-${i}`}
                    className="absolute bg-gray-300"
                    style={{
                      top: `${i * 25}%`,
                      left: 0,
                      height: "1px",
                      width: "100%",
                    }}
                  />
                ))}
              </div>

              {/* Blue water areas */}
              <div
                className="absolute bg-blue-200 opacity-30 rounded"
                style={{
                  left: "15%",
                  top: "10%",
                  width: "20%",
                  height: "30%",
                }}
              ></div>
              <div
                className="absolute bg-blue-200 opacity-30 rounded"
                style={{
                  left: "60%",
                  top: "40%",
                  width: "25%",
                  height: "35%",
                }}
              ></div>

              {/* Green landmark areas */}
              <div
                className="absolute bg-green-200 opacity-40 rounded"
                style={{
                  left: "40%",
                  top: "20%",
                  width: "15%",
                  height: "20%",
                }}
              ></div>
              <div
                className="absolute bg-green-200 opacity-40 rounded"
                style={{
                  left: "10%",
                  top: "60%",
                  width: "20%",
                  height: "25%",
                }}
              ></div>

              {/* Purple route line */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M10,30 Q30,20 50,35 T85,45"
                  stroke="#8B5CF6"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-white rounded-xl p-3 mb-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold">Amenities</h3>
          </div>
          <div className="flex gap-4 justify-center">
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-1">
                <Wifi className="h-4 w-4 text-blue-600" />
              </div>
              <span className="text-xs text-gray-600">Wi-Fi</span>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-1">
                <Bed className="h-4 w-4 text-green-600" />
              </div>
              <span className="text-xs text-gray-600">Sleep</span>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mb-1">
                <Zap className="h-4 w-4 text-yellow-600" />
              </div>
              <span className="text-xs text-gray-600">Charge</span>
            </div>
          </div>
        </div>

        {/* Boarding Timeline */}
        <div className="bg-white rounded-xl p-3 mb-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold">Boarding</h3>
            <button
              onClick={handleViewAllStops}
              className="text-orange-500 text-xs font-medium"
            >
              View all stops
            </button>
          </div>

          {/* Timeline with continuous line */}
          <div className="relative">
            <div className="absolute left-2 top-2 bottom-2 w-px bg-orange-300"></div>
            <div className="space-y-2">
              {[
                { time: "3:05 PM", location: "Chennai Central", type: "start" },
                { time: "4:30 PM", location: "Vellore", type: "stop" },
                { time: "7:30 PM", location: "Kochi", type: "end" },
              ].map((stop, index) => (
                <div key={index} className="relative flex items-center gap-3">
                  <div className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white z-10 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-gray-900">
                      {stop.time}
                    </div>
                    <div className="text-xs text-gray-600">{stop.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seat Selection */}
        <div className="bg-white rounded-xl p-3 mb-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold">Choose your seat</h3>
          </div>

          {/* Bus Seat Layout */}
          <div className="space-y-0.5">
            {Object.entries(groupedSeats).map(([row, rowSeats]) => (
              <div key={row} className="flex items-center gap-1">
                <span className="text-xs text-gray-500 w-2 text-right">
                  {row}
                </span>
                <div className="flex gap-0.5 ml-1">
                  {rowSeats
                    .sort((a, b) => a.number - b.number)
                    .map((seat, seatIndex) => (
                      <React.Fragment key={seat.id}>
                        <button
                          onClick={() => handleSeatClick(seat.id)}
                          disabled={seat.status === "occupied"}
                          className={`w-4 h-4 rounded text-xs font-medium transition-colors ${getSeatStyle(seat.status)}`}
                        >
                          {seat.number}
                        </button>
                        {/* Add aisle gap after seat 2 */}
                        {seatIndex === 1 && <div className="w-1"></div>}
                      </React.Fragment>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Seat Legend */}
          <div className="flex items-center gap-3 mt-2 text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-gray-400 rounded"></div>
              <span>Occupied</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-gray-200 rounded"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-orange-500 rounded"></div>
              <span>Selected</span>
            </div>
          </div>

          {selectedSeats.length > 0 && (
            <div className="mt-2 p-2 bg-blue-50 rounded-lg">
              <span className="text-xs font-medium text-blue-800">
                Selected: {selectedSeats.join(", ")}
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-xl p-3">
          <div className="flex gap-2">
            <button
              onClick={onAddPassenger}
              className="flex-1 flex items-center justify-center gap-1 py-2 px-2 bg-orange-100 text-orange-600 rounded-lg font-medium relative text-xs"
            >
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-orange-500 rounded-full"></div>
              <UserPlus className="h-3 w-3" />
              <span>Add Passenger</span>
            </button>
            <button
              onClick={onAddLuggage}
              className="flex-1 flex items-center justify-center gap-1 py-2 px-2 bg-orange-100 text-orange-600 rounded-lg font-medium relative text-xs"
            >
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-orange-500 rounded-full"></div>
              <Package className="h-3 w-3" />
              <span>Add Luggage</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
