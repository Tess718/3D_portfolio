import { useTransform, motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

const Card = ({ i, title, description, src, color, link, progress, range, targetScale }) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])
  const blur = useTransform(progress, [0, 1], [0, 20])

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
        <motion.div
          style={{
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            scale,
            top: `calc(-5vh + ${i * 40}px)`,
            filter: `blur(${blur}px)`
          }}
          className="flex flex-col justify-end relative top-[-45%] bg-[#383737] md:h-[90vh] xs:h-[50vh] rounded-2xl overflow-hidden md:px-[40px] xs:px-[20px] pt-6 w-full"
        >
          {/* Header */}
          <div className="flex md:justify-between xs:justify-end flex-wrap items-center absolute top-[30px] left-0 right-0 px-[40px]">
            <div className="md:block xs:hidden text-[#b0b0b0]">{title} 2024</div>
            <div className="flex list-none justify-end items-center gap-1 text-[#b0b0b0]">
              <li className="p-1 px-4 bg-[#1212123b] rounded-full">UI/UX</li>
              <li className="p-1 px-4 bg-[#1212123b] rounded-full">Web Development</li>
            </div>
          </div>

          {/* Main content */}
          <div>
            <div className="max-w-3xl m-auto text-center pb-[42px]">
              <h1 className="md:text-7xl text-4xl leading-[0.8] font-syne font-bold pb-[24px]">
                {title}
              </h1>
              <p className="font-sora text-sm flex flex-col gap-4 text-[#b0b0b0]">
                {description}
              </p>
            </div>

            {/* Image container */}
            <div className="md:w-[700px] h-[400px] relative bottom-0 mx-auto border-[14px] border-b-0 rounded-t-2xl border-[#0b0b0b] shadow-2xl">
              <div className="absolute top-0 z-10 left-0 right-0 flex justify-center">
                <div className="w-20 h-5 bg-[#0b0b0b] rounded-b-lg"></div>
              </div>
              <div>
                <motion.img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover"
                  style={{ scale: imageScale }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </a>
  )
}

export const projects = [
  {
    title: 'Matthias Leidinger',
    description:
      'Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.',
    src: 'https://img.freepik.com/premium-photo/close-up-portrait-smiling-man-holding-smart-phone_1048944-20090207.jpg?w=740',
    link: 'https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/',
    color: '#383737'
  },
  {
    title: 'Clément Chapillon',
    description:
      'This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes.',
    src: 'https://images.pexels.com/photos/1428277/pexels-photo-1428277.jpeg?auto=compress&cs=tinysrgb&w=1000',
    link: 'https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/',
    color: '#2f2f2f'
  },
  {
    title: 'Zissou',
    description:
      'Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with ambiguity.',
    src: 'https://img.freepik.com/free-photo/sportive-man-dark_23-2148482716.jpg?w=1000',
    link: 'https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/',
    color: '#1a1a1a'
  },
  {
    title: 'Mathias Svold',
    description:
      'The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold.',
    src: 'https://img.freepik.com/free-photo/sportive-man-dark_23-2148482716.jpg?w=1000',
    link: 'https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/',
    color: '#202020'
  },
  {
    title: 'Mark Rammers',
    description:
      'Dutch photographer Mark Rammers shared the first chapter of his latest project “all over again,” captured in Lanzarote. A meditative journey into the origins of regrets and uncertainty.',
    src: 'https://imgs.search.brave.com/XjDgUheEc4r0ca5XJVDREMvNUrKlpt_BVOFzRocIcTQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGRxd2FsbHMu/Y29tL2Rvd25sb2Fk/L2NpbGxpYW4tbXVy/cGh5LW9wcGVuaGVp/bWVyLTVrLXQ0LTEx/NTJ4ODY0LmpwZw',
    link: 'https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/',
    color: '#111111'
  }
]

const CardList = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  return (
    <section className="md:px-10 xs:px-4 pb-[16rem] max-w-[1500px] m-auto" id="work">
      <div className="md:px-10 xs:px-0 text-center">
        <h1 className="font-gormorant-garamond md:text-[8rem] font-light text-[3rem] pb-[48px] text-[#70707088] leading-[0.8]">
          SELECTED WORK
        </h1>
      </div>
      <main ref={container} className="relative px-10">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          )
        })}
      </main>
    </section>
  )
}

export default CardList
