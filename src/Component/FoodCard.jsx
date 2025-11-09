import React from "react";
import { CalendarDays, MapPin, Package } from "lucide-react";

const FoodCard = ({ food }) => {
  const {
    food_image,
    food_name,
    donator_name,
    donator_image,
    food_quantity,
    pickup_location,
    expire_date,
    food_status,
  } = food;

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300">
      {/* Food Image */}
      <div className="relative">
        <img
          src={food_image}
          alt={food_name}
          className="w-full h-52 object-cover"
        />
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
            food_status === "available"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {food_status}
        </span>
      </div>

      {/* Food Info */}
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">{food_name}</h2>

        <div className="flex items-center gap-3">
          {donator_image ? (
            <img
              src={donator_image}
              alt={donator_name}
              className="w-10 h-10 rounded-full border"
            />
          ) : (
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
              {donator_name?.charAt(0)}
            </div>
          )}
          <p className="text-sm text-gray-600">Donated by <span className="font-medium">{donator_name}</span></p>
        </div>

        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Package size={16} />
          <span>Quantity: {food_quantity}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <MapPin size={16} />
          <span>{pickup_location}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <CalendarDays size={16} />
          <span>Expire: {expire_date}</span>
        </div>

        <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
