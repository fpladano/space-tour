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
    <div className="min-w-screen md:[38.5px] min-h-screen bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-cover p-6 md:bg-[url('/assets/crew/background-crew-tablet.jpg')] md:pb-0 lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]">
      <Navbar />
      <main className="mt-[66px] flex flex-col md:m-auto md:mt-[136px] md:max-w-[537px] lg:flex lg:max-w-none lg:justify-between lg:px-[163px]">
        <SectionTitle />
        <div className="md:flex md:flex-col-reverse lg:flex-row-reverse">
          <div className="relative mx-auto h-[223px] w-[227px] md:mt-[3rem] md:h-[572px] md:w-[457px] lg:h-[604px] lg:w-[504px]">
            <Image
              src={crewMember.img}
              layout="fill"
              objectFit="fill"
              objectPosition="center"
            />
          </div>
          <div className="h-[1px] w-full bg-[#979797]/25 md:hidden"></div>
          <section className="mt-[33px] flex flex-col md:flex-col-reverse lg:justify-end">
            {/* Navigation */}
            <CrewNavigation
              menu={menu}
              onClick={onNavigationClickHanlder}
              active={crewMember.role}
            />
            {/* Description */}
            <section className="mt-[32px] mb-[104px] text-center md:mt-0 md:mb-[40px] lg:max-w-[500px] lg:text-justify">
              <h2 className="mb-[8px] font-primary uppercase text-white/50 md:text-[24px] lg:text-[32px]">
                {crewMember.role}
              </h2>
              <h1 className="mb-[16px] font-primary text-[24px] uppercase text-white md:text-[40px] lg:text-[56px]">
                {crewMember.name}
              </h1>
              <p className="lg:text-[18] font-paragraph leading-[25px] text-secondary-100 md:leading-[28px] lg:leading-[32px]">
                {crewMember.description}
              </p>
            </section>
          </section>
        </div>
      </main>
    </div>
  )
}

export default index
