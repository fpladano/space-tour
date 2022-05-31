import React from 'react'

interface Props {
  menu: string[]
  active: string
  onClick: (option: string) => void
}

function CrewNavigation({ menu, active, onClick }: Props) {
  const onClickButtonHanlder = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const selectedMemberRole = event.currentTarget.value
    onClick(selectedMemberRole)
  }

  return (
    <nav className="flex justify-center space-x-4 lg:justify-start">
      {menu.map((item, index) => {
        return (
          <button
            key={index}
            value={item}
            className={`h-[10px] w-[10px] cursor-pointer rounded-full lg:h-[15px] lg:w-[15px] ${
              item === active ? 'bg-white' : 'bg-[#979797]'
            }`}
            onClick={onClickButtonHanlder}
          ></button>
        )
      })}
    </nav>
  )
}

export default CrewNavigation
