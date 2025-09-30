import LogoLoop from '../components/LogoLoop';
import TitleHeader from '../components/TitleHeader';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiAppwrite, SiVercel, SiNetlify, SiGithub, SiGreensock } from 'react-icons/si';
import { TbBrandFramerMotion } from "react-icons/tb";

const techLogos = [
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiTypescript />, title: "TypeScript"},
  { node: <SiTailwindcss />, title: "Tailwind CSS"},
  { node: <SiHtml5 />, title: "HTML 5"},
  { node: <SiCss3 />, title: "CSS 3"},
  { node: <SiJavascript />, title: "Javascript"},
  { node: <SiBootstrap />, title: "Bootstrap CSS"},
  { node: <SiAppwrite />, title: "Appwrite"},
  { node: <SiVercel />, title: "Vercel" },
  { node: <SiNetlify />, title: "Netlify"},
  { node: <SiGreensock />, title: "GSAP" },
  { node: <TbBrandFramerMotion />, title: "Framer Motion"},
  { node: <SiGithub />, title: "Github"},
];

// Alternative with image sources
// const imageLogos = [
//   { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//   { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//   { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
// ];

function Stack() {
  return (
    <div className='md:mt-40 mt-20'>    
        <div style={{ height: 'fit-content', position: 'relative', overflow: 'hidden'}}>
        <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#0000"
            ariaLabel="Technology partners"
        />

        </div>
    </div>
  );
}

export default Stack;