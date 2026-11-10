
import React from "react";
import { BuyerLayout } from "./BuyerDashboard";

const payments = [
  { id: "PAY101", crop: "Wheat", farmer: "Ramesh Kumar", amount: "₹48,500", date: "20 Oct 2026", status: "Completed" },
  { id: "PAY102", crop: "Rice", farmer: "Suresh Singh", amount: "₹35,535", date: "23 Oct 2026", status: "Pending" },
  { id: "PAY103", crop: "Mustard", farmer: "Amit Verma", amount: "₹59,500", date: "28 Oct 2026", status: "Processing" },
];

export default function PaymentStatus() {
  return (
    <BuyerLayout>
      <h1 className="text-3xl font-bold text-gray-800">Payment Status</h1>
      <p className="text-gray-500 mt-2 mb-7">
        Check your crop procurement payment records.
      </p>

      <div className="grid sm:grid-cols-3 gap-5 mb-7">
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <p className="text-gray-500">Total Amount</p>
          <h2 className="text-2xl font-bold mt-2">₹1,43,535</h2>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <p className="text-gray-500">Completed Payments</p>
          <h2 className="text-2xl font-bold text-green-700 mt-2">₹48,500</h2>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <p className="text-gray-500">Pending Payments</p>
          <h2 className="text-2xl font-bold text-red-600 mt-2">₹95,035</h2>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full min-w-[650px] text-left">
          <thead className="bg-green-800 text-white">
            <tr>
              <th className="p-4">Payment ID</th>
              <th className="p-4">Crop</th>
              <th className="p-4">Farmer</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-b">
                <td className="p-4 font-semibold">{payment.id}</td>
                <td className="p-4">{payment.crop}</td>
                <td className="p-4">{payment.farmer}</td>
                <td className="p-4 font-semibold">{payment.amount}</td>
                <td className="p-4">{payment.date}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    payment.status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : payment.status === "Pending"
                      ? "bg-red-100 text-red-700"
                      : "bg-orange-100 text-orange-700"
                  }`}>
                    {payment.status}
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
