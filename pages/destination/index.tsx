import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

function Destination() {
  return (
    <div className="min-w-screen min-h-screen bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-cover p-6 md:bg-[url('/assets/destination/background-destination-tablet.jpg')] md:px-[162px] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]">
      <Navbar />
    </div>
  )
}

export default Destination
