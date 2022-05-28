import React, { useState } from 'react'
import Navigation from '../../components/Destination/Navigation'
import Navbar from '../../components/Navbar/Navbar'
import SectionTitle from '../../components/UI/SectionTitle'

const menu = [
  { destination: 'moon' },
  { destination: 'mars' },
  { destination: 'europa' },
  { destination: 'titan' },
]

function Destination() {
  const [destination, setDestination] = useState('moon')

  const onNavigationClickHanlder = (option: string) => {
    setDestination(option)
  }

  return (
    <div className="min-w-screen min-h-screen bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-cover p-6 md:bg-[url('/assets/destination/background-destination-tablet.jpg')] md:px-[162px] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]">
      <Navbar />
      <main className="mt-[66px] flex flex-col justify-center">
        <SectionTitle />

        {/* Image */}

        <Navigation
          active={destination}
          menu={menu}
          onClick={onNavigationClickHanlder}
        />

        {/* Destination */}
      </main>
    </div>
  )
}

export default Destination
