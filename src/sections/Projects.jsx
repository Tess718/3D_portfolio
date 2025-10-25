import React from 'react'
import StickyCards from '../components/StickyCards/StickyCards'
import TitleHeader from '../components/TitleHeader'

const Projects = () => {
  return (
    <div>
        <section className='intro relative w-full md:mt-[20%] lg:mt-40 mt-[20%] pb-[5%] '>
           <TitleHeader 
                title="My Work Showcase"
                sub="💻 Projects I've Worked On"
                centered={true}
            />
        </section>
        
        <StickyCards />

        <section className='outro relative lg:mb-40 mb-[20%]'>
        </section>
    </div>
  )
}

export default Projects