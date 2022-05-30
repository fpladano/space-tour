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
    <div className="min-w-screen md:[38.5px] min-h-screen bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-cover p-6 md:bg-[url('/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]">
      <Navbar />
      <main className="mt-[66px] md:m-auto md:mt-[136px] md:max-w-[537px] lg:flex lg:max-w-none lg:justify-between lg:px-[163px]">
        <div>
          <SectionTitle />
          <div className="mx-auto mb-[36px] h-[170px] w-[170px] md:h-[300px] md:w-[300px] lg:ml-[64px] lg:h-[445px] lg:w-[445px]">
            <Image src={destinationData.img} />
          </div>
        </div>
        <div className="lg:mt-[98px] lg:max-w-[445px]">
          <Navigation
            active={destination}
            menu={menu}
            onClick={onNavigationClickHanlder}
          />
          <section className="mt-[20px] text-center lg:text-justify">
            <h1 className="font-primary text-[56px] uppercase text-white md:text-[80px] lg:text-[100px]">
              {destination}
            </h1>
            <p className="font-paragraph text-[15px] leading-[25px] text-secondary-100 md:text-[16px] lg:text-[18px] lg:leading-[32px]">
              {destinationData.description}
            </p>
          </section>
          <div className="my-[32px] h-[1px] w-full bg-primary-700"></div>
          <section className="flex flex-col space-y-[32px] md:flex-row md:justify-center md:space-y-0 md:space-x-[68px] lg:justify-start">
            <section className="text-center lg:text-justify">
              <h1 className="mb-[12px] font-secondary  text-[16px] uppercase tracking-[2.36px]  text-secondary-100">
                Avg. Distance
              </h1>
              <p className="font-primary text-[28px] uppercase text-white">
                {destinationData.distance}
              </p>
            </section>
            <section className="text-center lg:text-justify">
              <h1 className="mb-[12px] font-secondary  text-[16px] uppercase tracking-[2.36px] text-secondary-100">
                Est. Travel Time
              </h1>
              <p className="font-primary text-[28px] uppercase text-white">
                {destinationData.travel_time}
              </p>
            </section>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Destination
