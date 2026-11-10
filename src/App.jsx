
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Components
import TopBar from './components/TopBar'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './footer/footer'

// Main Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'

// Seller Pages
import SellerRegistration from './Seller Registration/SellerRegistration'
import SellerLogin from './Seller Registration/SellerLogin'
import SellerDashboard from './Seller Dashboard/SellerDashboard'
import SlotBooking from './Seller Dashboard/SlotBooking'
import QueueStatus from './Seller Dashboard/QueueStatus'
import CropStatus from './Seller Dashboard/CropStatus'
import GovernmentStatus from './Seller Dashboard/GovernmentStatus'

// Buyer Authentication Pages
import BuyerRegistration from './Buyer/BuyerRegistration'
import BuyerLogin from './Buyer/BuyerLogin'

// Buyer Dashboard Pages
import BuyerDashboard from './BuyerDashboard /BuyerDashboard'
import AvailableCrops from './BuyerDashboard /AvailableCrops'
import BookedList from './BuyerDashboard /BookedList'
import MyPurchases from './BuyerDashboard /MyPurchases'
import PaymentStatus from './BuyerDashboard /PaymentStatus'
import ProcurementStatus from './BuyerDashboard /ProcurementStatus'
import BuyerProfile from './BuyerDashboard /BuyerProfile'


// Protected Buyer Route
const ProtectedBuyerRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("buyer") === "loggedIn";

  return isLoggedIn ? children : <Navigate to="/BuyerLogin" replace />;
};


// Protected Seller Route
const ProtectedSellerRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("seller") === "loggedIn";

  return isLoggedIn ? children : <Navigate to="/SellerLogin" replace />;
};


const App = () => {
  return (
    <Routes>

      {/* Landing Page */}
      <Route
        path="/"
        element={
          <>
            <TopBar />
            <Header />
            <Navbar />
            <Home />
            <Footer />
          </>
        }
      />

      {/* Login and Registration */}
      <Route path="/login" element={<Login />} />
      <Route path="/Registration" element={<Registration />} />

      {/* Seller Authentication */}
      <Route path="/SellerRegistration" element={<SellerRegistration />} />
      <Route path="/SellerLogin" element={<SellerLogin />} />

      {/* Seller Dashboard */}
      <Route
        path="/SellerDashboard"
        element={
          <ProtectedSellerRoute>
            <SellerDashboard />
          </ProtectedSellerRoute>
        }
      />

      <Route
        path="/seller-dashboard"
        element={
          <ProtectedSellerRoute>
            <SellerDashboard />
          </ProtectedSellerRoute>
        }
      />

      {/* Seller Feature Pages */}
      <Route
        path="/seller-dashboard/slot-booking"
        element={
          <ProtectedSellerRoute>
            <SlotBooking />
          </ProtectedSellerRoute>
        }
      />

      <Route
        path="/seller-dashboard/queue"
        element={
          <ProtectedSellerRoute>
            <QueueStatus />
          </ProtectedSellerRoute>
        }
      />

      <Route
        path="/seller-dashboard/crop-status"
        element={
          <ProtectedSellerRoute>
            <CropStatus />
          </ProtectedSellerRoute>
        }
      />

      <Route
        path="/seller-dashboard/notices"
        element={
          <ProtectedSellerRoute>
            <GovernmentStatus />
          </ProtectedSellerRoute>
        }
      />

      {/* Buyer Authentication */}
      <Route path="/BuyerRegistration" element={<BuyerRegistration />} />
      <Route path="/BuyerLogin" element={<BuyerLogin />} />

      {/* Buyer Dashboard */}
      <Route
        path="/buyer-dashboard"
        element={
          <ProtectedBuyerRoute>
            <BuyerDashboard />
          </ProtectedBuyerRoute>
        }
      />

      {/* Buyer Feature Pages */}
      <Route
        path="/buyer-dashboard/crops"
        element={
          <ProtectedBuyerRoute>
            <AvailableCrops />
          </ProtectedBuyerRoute>
        }
      />

      <Route
        path="/buyer-dashboard/booked-list"
        element={
          <ProtectedBuyerRoute>
            <BookedList />
          </ProtectedBuyerRoute>
        }
      />

      <Route
        path="/buyer-dashboard/purchases"
        element={
          <ProtectedBuyerRoute>
            <MyPurchases />
          </ProtectedBuyerRoute>
        }
      />

      <Route
        path="/buyer-dashboard/procurement"
        element={
          <ProtectedBuyerRoute>
            <ProcurementStatus />
          </ProtectedBuyerRoute>
        }
      />

      <Route
        path="/buyer-dashboard/payments"
        element={
          <ProtectedBuyerRoute>
            <PaymentStatus />
          </ProtectedBuyerRoute>
        }
      />

      <Route
        path="/buyer-dashboard/profile"
        element={
          <ProtectedBuyerRoute>
            <BuyerProfile />
          </ProtectedBuyerRoute>
        }
      />

    </Routes>
  )
}

export default App
