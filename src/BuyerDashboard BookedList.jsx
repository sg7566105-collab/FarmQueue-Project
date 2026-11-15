
import React from "react";
import { BuyerLayout } from "./BuyerDashboard";

const bookings = [
  { id: "FQ101", farmer: "Ramesh Kumar", crop: "Wheat", quantity: "20 Quintal", date: "01 Nov 2026", status: "Confirmed" },
  { id: "FQ102", farmer: "Suresh Singh", crop: "Rice", quantity: "15 Quintal", date: "02 Nov 2026", status: "Pending" },
  { id: "FQ103", farmer: "Amit Verma", crop: "Mustard", quantity: "10 Quintal", date: "03 Nov 2026", status: "Confirmed" },
  { id: "FQ104", farmer: "Mohan Lal", crop: "Potato", quantity: "25 Quintal", date: "04 Nov 2026", status: "Confirmed" },
];

export default function BookedList() {
  return (
    <BuyerLayout>
      <h1 className="text-3xl font-bold text-gray-800">Booked Farmers</h1>
      <p className="text-gray-500 mt-2 mb-6">
        Farmers who have booked crops for your procurement.
      </p>

      <div className="grid sm:grid-cols-3 gap-5 mb-7">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-500">Total Bookings</p>
          <h2 className="text-3xl font-bold text-green-800 mt-2">04</h2>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-500">Confirmed</p>
          <h2 className="text-3xl font-bold text-green-700 mt-2">03</h2>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-500">Pending</p>
          <h2 className="text-3xl font-bold text-orange-600 mt-2">01</h2>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-left min-w-[700px]">
          <thead className="bg-green-800 text-white">
            <tr>
              <th className="p-4">Booking ID</th>
              <th className="p-4">Farmer Name</th>
              <th className="p-4">Crop</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">{item.id}</td>
                <td className="p-4">{item.farmer}</td>
                <td className="p-4">{item.crop}</td>
                <td className="p-4">{item.quantity}</td>
                <td className="p-4">{item.date}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    item.status === "Confirmed"
                      ? "bg-green-100 text-green-800"
                      : "bg-orange-100 text-orange-800"
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BuyerLayout>
  );
}
