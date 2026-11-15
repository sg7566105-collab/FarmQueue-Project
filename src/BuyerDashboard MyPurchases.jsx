
import React from "react";
import { BuyerLayout } from "./BuyerDashboard";

const purchases = [
  { id: "PUR101", crop: "Wheat", farmer: "Ramesh Kumar", quantity: "20 Quintal", amount: "₹48,500", date: "20 Oct 2026", status: "Completed" },
  { id: "PUR102", crop: "Rice", farmer: "Suresh Singh", quantity: "15 Quintal", amount: "₹35,535", date: "23 Oct 2026", status: "Completed" },
  { id: "PUR103", crop: "Mustard", farmer: "Amit Verma", quantity: "10 Quintal", amount: "₹59,500", date: "28 Oct 2026", status: "Processing" },
];

export default function MyPurchases() {
  return (
    <BuyerLayout>
      <h1 className="text-3xl font-bold text-gray-800">My Purchases</h1>
      <p className="text-gray-500 mt-2 mb-6">
        View your crop purchase history.
      </p>

      <div className="grid sm:grid-cols-3 gap-5 mb-7">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-500">Total Purchases</p>
          <h2 className="text-3xl font-bold text-green-800 mt-2">03</h2>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-500">Total Quantity</p>
          <h2 className="text-3xl font-bold text-green-800 mt-2">45 Qtl</h2>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-500">Total Amount</p>
          <h2 className="text-3xl font-bold text-green-800 mt-2">₹1,43,535</h2>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">
          <thead className="bg-green-800 text-white">
            <tr>
              <th className="p-4">Purchase ID</th>
              <th className="p-4">Crop</th>
              <th className="p-4">Farmer</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-4 font-semibold">{item.id}</td>
                <td className="p-4">{item.crop}</td>
                <td className="p-4">{item.farmer}</td>
                <td className="p-4">{item.quantity}</td>
                <td className="p-4 font-semibold">{item.amount}</td>
                <td className="p-4">{item.date}</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
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
