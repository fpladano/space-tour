import React from 'react'

interface Props {
  active: string
  menu: { destination: string }[]
  onClick: (option: string) => void
}

function Navigation({ active, menu, onClick }: Props) {
  const navigationHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const option: string = event.currentTarget.textContent || ''
    onClick(option)
  }

  return (
    <nav className="flex justify-center space-x-8 lg:justify-start">
      {menu.map((item, index) => {
        return (
          <div key={index}>
            <button
              className={`cursor-pointer border-b-[3px] border-transparent font-secondary uppercase tracking-[2.36px] text-secondary-100 hover:border-b-inherit ${
                active === item.destination ? 'border-b-white text-white' : ''
              }`}
              onClick={navigationHandler}
            >
              {item.destination}
            </button>
          </div>
        )
      })}
    </nav>
  )
}

export default Navigation
