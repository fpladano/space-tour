import React, { useState } from 'react'
import CrewNavigation from '../../components/Crew/CrewNavigation'
import Navbar from '../../components/Navbar/Navbar'
import SectionTitle from '../../components/UI/SectionTitle'
import data from './crewData.json'
import commanderImg from '../../public/assets/crew/image-douglas-hurley.png'
import missionSpecialistImg from '../../public/assets/crew/image-mark-shuttleworth.png'
import pilotImg from '../../public/assets/crew/image-victor-glover.png'
import flightEngineerImg from '../../public/assets/crew/image-anousheh-ansari.png'
import Image from 'next/image'

const crewDetails = [
  { ...data[0], img: commanderImg },
  { ...data[1], img: missionSpecialistImg },
  { ...data[2], img: pilotImg },
  { ...data[3], img: flightEngineerImg },
]

const menu = crewDetails.map((crewMember) => crewMember.role)

function index() {
  const [crewMember, setCrewMember] = useState(crewDetails[0])

  const onNavigationClickHanlder = (option: string) => {
    const crewMemberUpdate = crewDetails.find(
      (crewMember) => crewMember.role === option
    )

    crewMemberUpdate && setCrewMember(crewMemberUpdate)
  }

  return (
    <div className="min-w-screen md:[38.5px] min-h-screen bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-cover p-6 md:bg-[url('/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]">
      <Navbar />
      <main className="mt-[66px] flex flex-col md:m-auto md:mt-[136px] md:max-w-[537px] lg:flex lg:max-w-none lg:justify-between lg:px-[163px]">
        <SectionTitle />
        <div className="relative mx-auto h-[223px] w-[327px]">
          <Image src={crewMember.img} layout="fill" objectFit="scale-down" />
        </div>
        <div className="h-[1px] w-full bg-[#979797]/25"></div>
        <section className="mt-[33px]">
          {/* Navigation */}
          <CrewNavigation menu={menu} onClick={onNavigationClickHanlder} />
          {/* Description */}
          <section className="mt-[32px] text-center">
            <h2 className="mb-[8px] font-primary uppercase text-white/50">
              {crewMember.role}
            </h2>
            <h1 className="mb-[16px] font-primary text-[24px] uppercase text-white">
              {crewMember.name}
            </h1>
            <p className="font-paragraph leading-[25px] text-secondary-100">
              {crewMember.description}
            </p>
          </section>
        </section>
      </main>
    </div>
  )
}

export default index
