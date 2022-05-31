import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import HamburgerIcon from '../UI/Icons/HamburgerIcon'
import LogoIcon from '../UI/Icons/LogoIcon'

const menu = [
  { tittle: 'Home', path: '/' },
  { tittle: 'Destination', path: '/destination' },
  { tittle: 'Crew', path: '/crew' },
  { tittle: 'Technology', path: '/technology' },
]

const variants = {
  open: { x: -300 },
  close: { x: 0 },
}

function Navbar() {
  const [isNavOn, setIsNavOn] = useState(false)
  const router = useRouter()

  const onHamburgerClickHanlder = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setIsNavOn((isNavOn) => !isNavOn)
  }

  return (
    <div className="absolute top-0 left-0 flex w-full items-center justify-between p-6 lg:top-[40px] lg:px-[55px]">
      <div>
        <LogoIcon />
      </div>
      <div
        className="z-30 cursor-pointer md:hidden"
        onClick={onHamburgerClickHanlder}
      >
        <HamburgerIcon />
      </div>
      {/* mobile nav */}
      <motion.div
        animate={isNavOn ? 'open' : 'close'}
        transition={{ type: 'just' }}
        variants={variants}
        className="fixed right-[-300px] top-0 z-20 flex min-h-screen w-[300px] flex-col justify-center space-y-5 backdrop-blur-xl md:hidden"
      >
        {menu.map((item, index) => {
          return (
            <Link href={item.path} key={index}>
              <div
                className={`flex h-full items-center pl-[32px] font-secondary text-[26px] uppercase text-white transition-all duration-300 ease-out hover:cursor-pointer `}
              >
                <span className="mr-[11px] inline-block font-secondary font-bold md:hidden lg:inline-block">
                  0{index}
                </span>
                <a>{item.tittle}</a>
              </div>
            </Link>
          )
        })}
      </motion.div>

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
