
import React from "react";
import { BuyerLayout } from "./BuyerDashboard";

const orders = [
  { id: "ORD101", crop: "Wheat", farmer: "Ramesh Kumar", quantity: "20 Quintal", status: "Procurement Completed", progress: 100 },
  { id: "ORD102", crop: "Rice", farmer: "Suresh Singh", quantity: "15 Quintal", status: "Crop Verification", progress: 60 },
  { id: "ORD103", crop: "Mustard", farmer: "Amit Verma", quantity: "10 Quintal", status: "Slot Booked", progress: 30 },
];

export default function ProcurementStatus() {
  return (
    <BuyerLayout>
      <h1 className="text-3xl font-bold text-gray-800">Procurement Status</h1>
      <p className="text-gray-500 mt-2 mb-7">
        Track the progress of your crop procurement.
      </p>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex flex-wrap justify-between gap-3">
              <div>
                <p className="text-sm text-gray-500">{order.id}</p>
                <h2 className="text-xl font-bold text-gray-800 mt-1">{order.crop}</h2>
                <p className="text-gray-500 mt-1">Farmer: {order.farmer}</p>
                <p className="text-gray-500">Quantity: {order.quantity}</p>
              </div>

              <span className="h-fit bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                {order.status}
              </span>
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold">Procurement Progress</span>
                <span className="text-green-700 font-bold">{order.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-600 h-3 rounded-full"
                  style={{ width: `${order.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 mt-6 text-center text-xs sm:text-sm">
              {["Booked", "Arrived", "Verified", "Completed"].map((step, index) => (
                <div key={step}>
                  <div className={`mx-auto w-7 h-7 rounded-full flex items-center justify-center text-white ${
                    order.progress >= (index + 1) * 25 ? "bg-green-600" : "bg-gray-300"
                  }`}>
                    {index + 1}
                  </div>
                  <p className="mt-2 text-gray-600">{step}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BuyerLayout>
  );
}
