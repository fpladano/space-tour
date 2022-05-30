import React, { useState } from 'react'
import CrewNavigation from '../../components/Crew/CrewNavigation'
import Navbar from '../../components/Navbar/Navbar'
import SectionTitle from '../../components/UI/SectionTitle'
import data from './crewData.json'
import commanderImg from '../../public/assets/crew/image-douglas-hurley.png'
import missionSpecialistImg from '../../public/assets/crew/image-mark-shuttleworth.png'
import pilotImg from '../../public/assets/crew/image-victor-glover.png'
import flightEngineerImg from '../../public/assets/crew/image-anousheh-ansari.png'

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
      <main className="mt-[66px] md:m-auto md:mt-[136px] md:max-w-[537px] lg:flex lg:max-w-none lg:justify-between lg:px-[163px]">
        <SectionTitle />
        <div>{/* Image */}</div>
        <div>
          {/* Navigation */}
          <CrewNavigation menu={menu} onClick={onNavigationClickHanlder} />
          {/* Description */}
        </div>
      </main>
    </div>
  )
}

export default index
