import React from 'react'
import HamburgerIcon from '../UI/Icons/HamburgerIcon'
import LogoIcon from '../UI/Icons/LogoIcon'

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full ">
      <div>
        <LogoIcon />
      </div>
      <div>
        <HamburgerIcon />
      </div>
    </nav>
  )
}

export default Navbar
