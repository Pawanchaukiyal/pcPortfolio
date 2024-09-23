import React, { useState, useEffect } from 'react';
import { FaHome, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';
import { IoShareSocialSharp } from "react-icons/io5";
import { GiClockwork } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import './Float.css';
import { handleShare } from '../../constants/HandleShare';


const FloatingNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  let hideMenuTimeout = null;

  const handleMouseEnter = () => {
    clearTimeout(hideMenuTimeout);
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    hideMenuTimeout = setTimeout(() => {
      setShowMenu(false);
    }, 100);
  };

  useEffect(() => {
    return () => clearTimeout(hideMenuTimeout);
  }, []);

  return (
    <div
      className="floating-circle green-pink-gradient"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`menu-box ${showMenu ? 'show' : ''}`}>
        <ul>
          <li><FaHome /><a href="#hero"> Home</a></li>
          <li><FaInfoCircle /><a href="#about"> About</a></li>
          <li><FaPhoneAlt /><a href="#contact"> Contact</a></li>
          <li><MdWorkOutline /><a href="#work-experience"> Work</a></li>
          <li><GiClockwork /><a href="#plans"> Plans</a></li>
          {/* Uncomment if needed */}
          <li><IoShareSocialSharp /><a href="#share" onClick={handleShare}> Share</a></li>
        </ul>
      </div>
    </div>
  );
};

export default FloatingNavbar;
