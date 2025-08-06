import React, { useState, useEffect } from 'react';
import './Preloader.css'

const Preloader = () => {

    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 5000);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (!showLoader) {
      return null; 
    }
  

  return (
    <div className='loader-wrapper'>
        <div className="loader">
            <div data-glitch="Hello World!" className="glitch">Hello World!</div>
        </div>
    </div>
  )
}

export default Preloader