
import React, { useState } from "react";
import { BuyerLayout } from "./BuyerDashboard";

export default function BuyerProfile() {
  const [profile, setProfile] = useState({
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "9876543210",
    business: "Sharma Traders",
    address: "Lucknow, Uttar Pradesh",
    gst: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile saved locally for demo. Backend integration is pending.");
  };

  return (
    <BuyerLayout>
      <h1 className="text-3xl font-bold text-gray-800">Buyer Profile</h1>
      <p className="text-gray-500 mt-2 mb-7">
        Manage your personal and business information.
      </p>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-8">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-3xl">
            👤
          </div>
          <h2 className="text-xl font-bold mt-3">{profile.name}</h2>
          <p className="text-gray-500">Registered Buyer</p>
        </div>

        <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
          {[
            { label: "Full Name", name: "name" },
            { label: "Email Address", name: "email", type: "email" },
            { label: "Mobile Number", name: "phone" },
            { label: "Business Name", name: "business" },
            { label: "Business Address", name: "address" },
            { label: "GST Number (Optional)", name: "gst" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-gray-700 font-medium mb-2">
                {field.label}
              </label>
              <input
                type={field.type || "text"}
                name={field.name}
                value={profile[field.name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          ))}

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </BuyerLayout>
  );
}
