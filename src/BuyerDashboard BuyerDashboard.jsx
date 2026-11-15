
import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

export function BuyerLayout({ children }) {
  const navigate = useNavigate();

  const links = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/buyer-dashboard" },
    { name: "Available Crops", path: "/buyer-dashboard/crops" },
    { name: "Booked List", path: "/buyer-dashboard/booked-list" },
    { name: "My Purchases", path: "/buyer-dashboard/purchases" },
    { name: "Procurement", path: "/buyer-dashboard/procurement" },
    { name: "Payments", path: "/buyer-dashboard/payments" },
    { name: "Profile", path: "/buyer-dashboard/profile" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("buyer");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Top Bar */}
      <div className="bg-green-800 text-white text-center py-2 text-sm">
        भारत सरकार की पहल | किसानों की सुविधा, देश की समृद्धि
      </div>

      {/* Header */}
      <header className="bg-white px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">

          <Link to="/buyer-dashboard">
            <h1 className="text-3xl font-bold text-green-800">
              FarmQueue
            </h1>
            <p className="text-sm text-gray-500">
              Buyer Portal
            </p>
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">
              Welcome, Buyer
            </span>

            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>

        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-red-700 text-white">
        <div className="max-w-7xl mx-auto flex gap-2 px-4 py-3 overflow-x-auto">

          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={true}
              className={({ isActive }) =>
                `whitespace-nowrap px-4 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-white text-red-700 font-bold"
                    : "hover:bg-red-800"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

        </div>
      </nav>

      {/* Page Content */}
      <main className="max-w-7xl mx-auto p-5 md:p-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white text-center py-5 mt-10">
        © 2026 FarmQueue | Making Crop Procurement Easier
      </footer>

    </div>
  );
}


// Statistics Card
function StatCard({ title, value, color }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-600">

      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h2 className={`text-3xl font-bold mt-2 ${color || "text-green-800"}`}>
        {value}
      </h2>

    </div>
  );
}


// Main Buyer Dashboard
export default function BuyerDashboard() {
  return (
    <BuyerLayout>

      {/* Welcome Section */}
      <div className="bg-green-800 text-white p-8 md:p-10 rounded-2xl mb-8">

        <p className="text-green-200">
          BUYER DASHBOARD
        </p>

        <h1 className="text-3xl md:text-4xl font-bold mt-3">
          Welcome to FarmQueue!
        </h1>

        <p className="mt-3 text-green-100 max-w-2xl">
          Find crops, connect with farmers and manage your procurement
          activities from one place.
        </p>

        <Link
          to="/buyer-dashboard/crops"
          className="inline-block bg-white text-green-800 font-semibold px-6 py-3 rounded-lg mt-6 hover:bg-green-100 transition"
        >
          Explore Crops →
        </Link>

      </div>


      {/* Overview */}
      <h2 className="text-2xl font-bold text-gray-800 mb-5">
        Your Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        <StatCard title="Available Crops" value="24" />

        <StatCard title="Total Bookings" value="08" />

        <StatCard title="Completed Purchases" value="12" />

        <StatCard
          title="Pending Payments"
          value="02"
          color="text-red-600"
        />

      </div>


      {/* Quick Actions and Recent Activity */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm">

          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Quick Actions
          </h3>

          <div className="space-y-3">

            <Link
              to="/buyer-dashboard/crops"
              className="block p-4 rounded-lg bg-green-50 text-green-800 hover:bg-green-100 transition"
            >
              Browse Available Crops →
            </Link>

            <Link
              to="/buyer-dashboard/booked-list"
              className="block p-4 rounded-lg bg-green-50 text-green-800 hover:bg-green-100 transition"
            >
              View Booked Farmers →
            </Link>

            <Link
              to="/buyer-dashboard/payments"
              className="block p-4 rounded-lg bg-green-50 text-green-800 hover:bg-green-100 transition"
            >
              Check Payment Status →
            </Link>

          </div>

        </div>


        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-sm">

          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Recent Activity
          </h3>

          <div className="space-y-4 text-sm">

            <p className="border-b pb-3">
              <span className="font-semibold text-green-700">
                Booking Update
              </span>
              <br />
              New farmer booking received.
            </p>

            <p className="border-b pb-3">
              <span className="font-semibold text-green-700">
                Procurement
              </span>
              <br />
              Wheat procurement is in progress.
            </p>

            <p>
              <span className="font-semibold text-green-700">
                Payment
              </span>
              <br />
              One payment is pending.
            </p>

          </div>

        </div>

      </div>

    </BuyerLayout>
  );
}
