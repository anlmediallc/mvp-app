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
        {/* MSS Transport Card */}
        <div className="bg-white rounded-2xl p-4 mb-3">
          {/* Transport Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MSS</span>
              </div>
              <span className="font-semibold text-lg">MSS transport</span>
            </div>
            <button className="p-2 bg-gray-800 rounded-full">
              <ExternalLink className="h-4 w-4 text-white" />
            </button>
          </div>

          {/* Trip Time Info */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold">3:05</div>
              <div className="text-gray-600 text-sm">Chennai</div>
            </div>
            <div className="flex-1 flex flex-col items-center mx-4">
              <div className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                7h 20m
              </div>
              <div className="w-full h-px bg-gray-300 mt-2"></div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">7:30</div>
              <div className="text-gray-600 text-sm">Kochi</div>
            </div>
          </div>

          {/* Route Map */}
          <div className="bg-gray-50 rounded-xl h-32 mb-4 relative overflow-hidden border border-gray-200">
            {/* Map background with route visualization */}
            <div className="absolute inset-0">
              {/* Grid pattern */}
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
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={`h-${i}`}
                    className="absolute bg-gray-300"
                    style={{
                      top: `${i * 16.67}%`,
                      left: 0,
                      height: "1px",
                      width: "100%",
                    }}
                  />
                ))}
              </div>

              {/* Route line */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M15,50 Q35,30 55,45 Q75,60 85,40"
                  stroke="#8B5CF6"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.8"
                />
                {/* Route points */}
                <circle cx="15" cy="50" r="3" fill="#F59E0B" />
                <circle cx="55" cy="45" r="3" fill="#F59E0B" />
                <circle cx="85" cy="40" r="3" fill="#F59E0B" />
              </svg>

              {/* Landmark areas */}
              <div
                className="absolute bg-green-200 opacity-40 rounded"
                style={{
                  left: "25%",
                  top: "20%",
                  width: "15%",
                  height: "25%",
                }}
              ></div>
              <div
                className="absolute bg-blue-200 opacity-30 rounded"
                style={{
                  left: "65%",
                  top: "60%",
                  width: "20%",
                  height: "30%",
                }}
              ></div>
            </div>
          </div>

          {/* Amenities - Inside MSS Transport Card */}
          <div className="flex gap-1 justify-center">
            <div className="text-center">
              <div className="w-3 h-3 bg-blue-100 rounded-full flex items-center justify-center">
                <Wifi className="h-2 w-2 text-blue-600" />
              </div>
              <span className="text-xs text-gray-600">Wi-Fi</span>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-green-100 rounded-full flex items-center justify-center">
                <Bed className="h-2 w-2 text-green-600" />
              </div>
              <span className="text-xs text-gray-600">Sleeping berth</span>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-yellow-100 rounded-full flex items-center justify-center">
                <Zap className="h-2 w-2 text-yellow-600" />
              </div>
              <span className="text-xs text-gray-600">Charging</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* Boarding & Drop-off */}
          <div className="bg-white rounded-xl p-3">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold">Boarding & Drop-off</h3>
            </div>

            {/* Timeline */}
            <div className="space-y-3">
              {[
                {
                  time: "3:05 PM",
                  location: "Chennai, Nungambakkam",
                  type: "start",
                },
                {
                  time: "3:05 PM",
                  location: "Kochi, Bus station ernakulam",
                  type: "middle",
                },
                {
                  time: "3:05 PM",
                  location: "Kochi, Bus station ernakulam",
                  type: "end",
                },
              ].map((stop, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-1 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-gray-900 truncate">
                      {stop.location}
                    </div>
                    <div className="text-xs text-gray-500">{stop.time}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleViewAllStops}
              className="text-blue-500 text-xs font-medium mt-2 flex items-center gap-1"
            >
              View all stops
              <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xs">→</span>
              </div>
            </button>
          </div>

          {/* Bus Seat Selection */}
          <div className="bg-white rounded-xl p-3">
            <h3 className="text-sm font-semibold mb-3">Bus Seat:</h3>

            {/* Seat Grid */}
            <div className="space-y-1 mb-3">
              {Object.entries(groupedSeats).map(([row, rowSeats]) => (
                <div key={row} className="flex items-center gap-1">
                  <span className="text-xs text-gray-500 w-2 text-center">
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
            <div className="flex items-center justify-between text-xs text-gray-600">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded"></div>
                <span>3</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-gray-200 rounded"></div>
                <span>On</span>
              </div>
            </div>
          </div>
        </div>

        {/* Seat Selection Info */}
        <div className="bg-white rounded-xl p-3 mb-3">
          <h3 className="text-sm font-semibold mb-2">Seat selection</h3>
          {selectedSeats.length > 0 ? (
            <div className="text-xs text-gray-600">
              Selected seats: {selectedSeats.join(", ")}
            </div>
          ) : (
            <div className="text-xs text-gray-500">No seats selected</div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={onAddPassenger}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-blue-50 text-blue-600 rounded-xl font-medium relative"
          >
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
            <UserPlus className="h-4 w-4" />
            <span className="text-sm">Add Passenger</span>
          </button>
          <button
            onClick={onAddLuggage}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-blue-50 text-blue-600 rounded-xl font-medium relative"
          >
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
            <Package className="h-4 w-4" />
            <span className="text-sm">Add Luggage</span>
          </button>
        </div>
      </div>
    </div>
  );
}
