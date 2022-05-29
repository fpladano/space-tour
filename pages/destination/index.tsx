import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Navigation from '../../components/Destination/Navigation'
import Navbar from '../../components/Navbar/Navbar'
import SectionTitle from '../../components/UI/SectionTitle'

import data from './destinationData.json'
import moonImage from '../../public/assets/destination/image-moon.png'
import marsImage from '../../public/assets/destination/image-mars.png'
import europaImage from '../../public/assets/destination/image-europa.png'
import titanImage from '../../public/assets/destination/image-titan.png'

const menu = [
  { destination: 'moon' },
  { destination: 'mars' },
  { destination: 'europa' },
  { destination: 'titan' },
]

const destinationDetails = [
  { ...data[0], img: moonImage },
  { ...data[1], img: marsImage },
  { ...data[2], img: europaImage },
  { ...data[3], img: titanImage },
]

function Destination() {
  const [destination, setDestination] = useState('moon')
  const [destinationData, setDestinationData] = useState(destinationDetails[0])

  useEffect(() => {
    const newData = destinationDetails.find(
      (object) => object.name === destination
    )

    newData && setDestinationData(newData)
  }, [destination])

  const onNavigationClickHanlder = (option: string) => {
    setDestination(option)
  }

  return (
    <div className="min-w-screen min-h-screen bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-cover p-6 md:bg-[url('/assets/destination/background-destination-tablet.jpg')] md:px-[162px] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]">
      <Navbar />
      <main className="mt-[66px] flex flex-col justify-center">
        <SectionTitle />
        <Image src={destinationData.img} width="300px" height="300px" />
        <Navigation
          active={destination}
          menu={menu}
          onClick={onNavigationClickHanlder}
        />
        <section>
          <h1 className="text-white">{destination}</h1>
          <p className="text-white">{destinationData.description}</p>
        </section>
        <div></div>
        <section>
          <section>
            <h1 className="text-secondary-100">Avg. Distance</h1>
            <p className="text-white">{destinationData.distance}</p>
          </section>
          <section>
            <h1 className="text-secondary-100">Est. Travel Time</h1>
            <p className="text-white">{destinationData.travel_time}</p>
          </section>
        </section>
      </main>
    </div>
  )
}

export default Destination
