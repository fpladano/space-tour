import { Router, useRouter } from 'next/router'
import { title } from 'process'
import React from 'react'

const titles = [
  { path: '/destination', text: 'Pick your destination' },
  { path: '/crew', text: 'Meet your crew' },
  { path: '/technology', text: 'Space launch 101' },
]

function SectionTitle() {
  const route = useRouter()
  const title = titles.find((element) => element.path === route.pathname)
  return (
    <h1 className="leading-auto mb-[32px] text-center font-secondary text-[16px] uppercase tracking-[2.7px] text-white">
      <span className="mr-[18px] font-bold text-[#979797]">01</span>
      {title?.text}
    </h1>
  )
}

export default SectionTitle
