import React from 'react'
import { abilities } from '../constants'

const Featurecards = () => {
  return (
    <div className='w-full padding-x-lg mt-[10%]'>
        <div className="mx-auto grid-3-cols">
            {abilities.map(({ imgPath, title, desc }, index) => (
                <div className='card-border rounded-xl p-8 flex flex-col gap-4 cursor-pointer'
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
                >
                    <div className="size-14 flex itms-center justify-center rounded-full">
                        <img src={imgPath} alt={title} />
                    </div>
                    <h3 className='text-white text-2xl font-semibold mt-2'>{title}</h3>
                    <p className='text-white-50 text-lg'>{desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Featurecards