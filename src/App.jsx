import React from 'react'
import { Routes, Route } from 'react-router-dom'

import TopBar from './components/TopBar'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './footer/footer'
import Login from './pages/Login'
import Registration from './pages/Registration';
import SellerRegistration from './Seller Registration/SellerRegistration';
import BuyerRegistration from './Buyer/BuyerRegistration';
import SellerLogin from './Seller Registration/SellerLogin';
import BuyerLogin from './Buyer/BuyerLogin';

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

      {/* Login Page */}
      <Route
        path="/login"
        element={<Login />}
      />
      <Route path="/Registration" element={<Registration/>}/>
      <Route path="/SellerRegistration" element={<SellerRegistration/>}/>
      <Route path="/BuyerRegistration" element={<BuyerRegistration/>}/>
      <Route path="/SellerLogin" element={<SellerLogin/>}/>
      <Route path="/BuyerLogin" element={<BuyerLogin/>}/>

    </Routes>
  )
}

export default App