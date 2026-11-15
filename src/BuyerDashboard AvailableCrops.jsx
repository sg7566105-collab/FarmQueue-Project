
import React, { useState } from "react";
import { BuyerLayout } from "./BuyerDashboard";

const crops = [
  { id: 1, name: "Wheat", farmer: "Ramesh Kumar", quantity: "100 Quintal", price: "₹2,425 / Quintal", location: "Lucknow" },
  { id: 2, name: "Rice", farmer: "Suresh Singh", quantity: "80 Quintal", price: "₹2,369 / Quintal", location: "Kanpur" },
  { id: 3, name: "Mustard", farmer: "Amit Verma", quantity: "50 Quintal", price: "₹5,950 / Quintal", location: "Agra" },
  { id: 4, name: "Maize", farmer: "Rahul Yadav", quantity: "60 Quintal", price: "₹2,400 / Quintal", location: "Sitapur" },
  { id: 5, name: "Potato", farmer: "Mohan Lal", quantity: "120 Quintal", price: "₹1,200 / Quintal", location: "Lucknow" },
  { id: 6, name: "Barley", farmer: "Vijay Kumar", quantity: "40 Quintal", price: "₹2,150 / Quintal", location: "Unnao" },
];

export default function AvailableCrops() {
  const [search, setSearch] = useState("");

  const filteredCrops = crops.filter((crop) =>
    `${crop.name} ${crop.farmer} ${crop.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <BuyerLayout>
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Available Crops</h1>
          <p className="text-gray-500 mt-2">Find crops from registered farmers.</p>
        </div>

        <input
          type="text"
          placeholder="Search crop or farmer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-3 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCrops.map((crop) => (
          <div key={crop.id} className="bg-white rounded-xl shadow-sm p-6 border hover:shadow-md transition">
            <div className="bg-green-100 text-green-800 w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4">
              🌾
            </div>

            <h2 className="text-xl font-bold text-gray-800">{crop.name}</h2>
            <p className="text-gray-500 mt-1">Farmer: {crop.farmer}</p>
            <p className="text-gray-500">Location: {crop.location}</p>
            <p className="mt-3 font-semibold text-green-800">{crop.quantity}</p>
            <p className="font-bold text-lg mt-2">{crop.price}</p>

            <button
              onClick={() => alert("Booking feature will be connected to the backend later.")}
              className="w-full bg-green-700 text-white py-3 rounded-lg mt-5 hover:bg-green-800"
            >
              Book Crop
            </button>
          </div>
        ))}
      </div>

      {filteredCrops.length === 0 && (
        <p className="text-center text-gray-500 py-10">No crops found.</p>
      )}
    </BuyerLayout>
  );
}
