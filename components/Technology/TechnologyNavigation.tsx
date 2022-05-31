import React from 'react'

interface Props {
  menu: string[]
  active: string
  onClick: (option: string) => void
}

function TechnologyNavigation({ menu, active, onClick }: Props) {
  const onClickHanlder = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const update = event.currentTarget.value
    onClick(update)
  }

  return (
    <nav className="flex justify-center space-x-4 lg:flex-col lg:space-x-0 lg:space-y-8">
      {menu.map((item, index) => {
        return (
          <button
            key={index}
            value={item}
            onClick={onClickHanlder}
            className={`rounded-full border-[1px] border-white/50 px-[18.5px] py-[11px] font-primary hover:border-white md:px-[26px] md:py-[14px] md:text-[24px] lg:px-[35.5px] lg:py-[20px] lg:text-[32px]   ${
              active === item
                ? 'bg-white text-black'
                : 'bg-transparent text-white'
            }`}
          >
            {index + 1}
          </button>
        )
      })}
    </nav>
  )
}

export default TechnologyNavigation
