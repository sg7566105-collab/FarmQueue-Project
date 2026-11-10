
import React from 'react'
import sdashbg from "../assets/sdashbg.jpeg"
import Welcome from './Welcome'

const Seller_Hero = () => {
  return (
    <section
      className="relative min-h-[420px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${sdashbg})` }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
        <Welcome />
      </div>

    </section>
  )
}

export default Seller_Hero
