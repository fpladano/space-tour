import { Router, useRouter } from 'next/router'
import { title } from 'process'
import React from 'react'

const titles = [
  { path: '/' },
  { path: '/destination', text: 'Pick your destination' },
  { path: '/crew', text: 'Meet your crew' },
  { path: '/technology', text: 'Space launch 101' },
]

function SectionTitle() {
  const route = useRouter()
  const index = titles.findIndex((element) => element.path === route.pathname)
  const title = titles.find((element) => element.path === route.pathname)
  return (
    <h1
      className={`leading-auto mb-[32px] text-center font-secondary text-[16px] uppercase tracking-[2.7px] text-white md:text-justify md:text-[20px] lg:mb-[97px] lg:text-[28px] lg:tracking-[4.72px] ${
        route.pathname === '/crew' ? 'md:mb-[10px]' : 'md:mb-[60px]'
      }`}
    >
      <span className="mr-[18px] font-bold text-[#979797]">0{index}</span>
      {title?.text}
    </h1>
  )
}

export default SectionTitle
