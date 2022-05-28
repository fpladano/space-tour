import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import HamburgerIcon from '../UI/Icons/HamburgerIcon'
import LogoIcon from '../UI/Icons/LogoIcon'

const menu = [
  { tittle: 'Home', path: '/' },
  { tittle: 'Destination', path: '/destination' },
  { tittle: 'Crew', path: '/crew' },
  { tittle: 'Technology', path: '/technology' },
]

function Navbar() {
  const router = useRouter()

  return (
    <div className="absolute top-0 left-0 flex w-full items-center justify-between p-6 lg:top-[40px] lg:px-[55px]">
      <div>
        <LogoIcon />
      </div>
      <div className="md:hidden">
        <HamburgerIcon />
      </div>
      <div className="z-10 ml-[55px] mr-[725px] hidden h-[1px] w-full bg-white/50 lg:inline"></div>
      <nav className="absolute right-0 top-0 hidden h-[96px] space-x-12 bg-primary-800 px-[46px] font-secondary text-[14px] uppercase tracking-[2.36px] text-white md:flex md:items-center lg:bg-[#979797]/20 lg:pr-[165px] lg:pl-[123px] lg:text-[16px] lg:backdrop-blur-sm">
        {menu.map((item, index) => {
          return (
            <Link href={item.path} key={index}>
              <div
                className={`flex h-full items-center border-b-[3px] border-transparent transition-all duration-300 ease-out hover:cursor-pointer ${
                  router.pathname === item.path
                    ? 'border-b-white'
                    : 'hover:border-b-white/50'
                }`}
              >
                <span className="mr-[11px] hidden font-bold lg:inline-block">
                  0{index}
                </span>
                <a>{item.tittle}</a>
              </div>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default Navbar
