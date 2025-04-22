import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackImgs } from '../constants'
import Tilt from 'react-parallax-tilt';

const Techstack = () => {
  return (
    <div id='skills' className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader
            title="My Preferred Tech Stack"
            sub="🤝 The Skills I Bring To The Table"
            centered={true}
            />

            <div className="tech-grid">
                {techStackImgs.map((icon, index) => (
                    <div key={icon.name} className='card-border tech-card overflow-hidden xl:rounded-full rounded-lg relative'
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100}`} // staggered delay (optional)
                    data-aos-duration={`${800 + index * 100}`} // staggered duration
                    >
                        <div className="tech-card-animated-bg" />
                        <div className="tech-card-content">
                            <div className='tech-icon-wrapper'>
                                <Tilt>
                                    <img src={icon.imgPath} alt="" className='w-[150px]' />
                                </Tilt>
                            </div>
                            <div className="padding-x w-full">
                                <p>{icon.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Techstack