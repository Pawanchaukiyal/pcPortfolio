import React, { useState, useEffect } from 'react';
import './Logo.css';

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Web Developer", "Web Designer", "App Developer"];

  useEffect(() => {
    let timer;

    if (isHovered) {
      timer = setInterval(() => {
        setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
      }, 2000); // Change text every 2 seconds
    } else {
      setCurrentTextIndex(0); // Reset index when not hovered
    }

    return () => clearInterval(timer); // Cleanup the timer on unmount
  }, [isHovered, texts.length]);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // Optionally, keep the text shown once it's visible
    // setIsHovered(false); 
  };

  return (
    <div className="main_head flex items-center" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
       {/* Circle Logo */}
       <div
        className="logo-container relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-400 cursor-pointer border-4 border-y-black-100 flex items-center justify-center hover:animate-spin-logo"
      >
        <span className="rotate-text text-3xl font-bold tracking-wider text-purple-900">PC</span>
      </div>

      {/* Text Display */}
      <div className="hover-texts flex flex-col ml-4">
        {isHovered && (
          <span className="hover-text font-bold">{texts[currentTextIndex]}</span>
        )}
      </div>
    </div>
  );
};

export default Logo;
