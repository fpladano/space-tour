import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SectionTitle from '../../components/UI/SectionTitle'
import data from './technologyData.json'
import vehicleImgLandscape from '../../public/assets/technology/image-launch-vehicle-landscape.jpg'
import spaceportImgLandscape from '../../public/assets/technology/image-spaceport-landscape.jpg'
import capsuleImgLandscape from '../../public/assets/technology/image-space-capsule-landscape.jpg'
import Image from 'next/image'
import TechnologyNavigation from '../../components/Technology/TechnologyNavigation'

const technologyData = [
  { ...data[0], landscape: vehicleImgLandscape },
  { ...data[1], landscape: spaceportImgLandscape },
  { ...data[2], landscape: capsuleImgLandscape },
]

const menu = technologyData.map((element) => element.name)

function index() {
  const [technology, setTechnology] = useState(technologyData[0])

  const onNavigationClickHandler = (option: string) => {
    const update = technologyData.find((element) => element.name === option)

    update && setTechnology(update)
  }
  return (
    <div className="min-w-screen min-h-screen bg-[url('/assets/technology/background-technology-mobile.jpg')] bg-cover md:bg-[url('/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/assets/technology/background-technology-desktop.jpg')]">
      <Navbar />
      <div className="pt-[88px] md:pt-[136px] md:pl-[38.5px]">
        <SectionTitle />
      </div>
      <main className="flex flex-col items-center space-y-6 md:space-y-12">
        <div className="w-full">
          <Image src={technology.landscape} layout="responsive" />
        </div>

        <TechnologyNavigation
          menu={menu}
          active={technology.name}
          onClick={onNavigationClickHandler}
        />

        <section className="max-w-[500px] px-6 text-center">
          <h2 className="mb-[9px] font-secondary text-[14px] uppercase tracking-[2.36px] text-secondary-100 md:text-[16px] md:tracking-[2.7px]">
            The Terminology...
          </h2>
          <h1 className="mb-[16px] font-primary text-[24px] uppercase text-white md:text-[40px]">
            {technology.name}
          </h1>
          <p className="font-paragraph text-[15px] leading-[25px] text-secondary-100 md:text-[16px] md:leading-[28px]">
            {technology.description}
          </p>
        </section>
      </main>
    </div>
  )
}

export default index
