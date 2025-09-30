import React from 'react'
import StickyCards from '../components/StickyCards/StickyCards'
import TitleHeader from '../components/TitleHeader'

const Projects = () => {
  return (
    <div>
        <section className='intro relative w-full md:mt-[20%] lg:mt-[5%] mt-[20%] py-[5%] '>
           <TitleHeader 
                title="My Work Showcase"
                sub="💻 Projects I've Worked On"
                centered={true}
            />
        </section>
        
        <StickyCards />

        <section className='outro relative md:h-[20vh] max-sm:mb-[20%]'>
        </section>
    </div>
  )
}

export default Projects