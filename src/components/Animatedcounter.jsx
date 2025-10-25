import React from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup'

const Animatedcounter = () => {
  return (
    <div id='counter' className='padding-x-lg xl:mt-0 md:mt-55 mt-75'>
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div
            className='bg-[#2a2e2e] rounded-lg p-10 flex flex-col justify-center'
            key={item.id}
          >
            <div className='counter-number text-white text-5xl font-bold mb-2'>
              <CountUp
                end={item.value}
                suffix={item.suffix || ''}
                duration={1}
                enableScrollSpy
              />
            </div>
            <div className='text-white-50 text-lg'>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Animatedcounter