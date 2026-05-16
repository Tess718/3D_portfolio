"use client";
import Image from 'next/image';
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container justify-between items-center gap-5 md:gap-0">
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
              <a href={socialImg.href} key={index} target="_blank" rel="noopener noreferrer">
                <div className="icon">
                  <Image 
                    src={socialImg.imgPath} 
                    alt="social icon" 
                    width={index === 2 ? 46 : 20} 
                    height={index === 2 ? 46 : 20}  
                  />
                </div>
              </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Built by Dev Tess.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
