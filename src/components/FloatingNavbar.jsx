import React, { useState, useEffect } from 'react';
import { FaHome, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';
import { IoShareSocialSharp } from "react-icons/io5";
import { GiClockwork } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import './Float.css';

const FloatingNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  let hideMenuTimeout = null;

  const handleMouseEnter = () => {
    // Clear any timeout to hide the menu
    clearTimeout(hideMenuTimeout);
    setShowMenu(true); // Show the menu immediately
  };

  const handleMouseLeave = () => {
    // Set a timeout to hide the menu after 10 seconds
    hideMenuTimeout = setTimeout(() => {
      setShowMenu(false);
    }, 100); // 10 seconds (10,000 milliseconds)
  };

  // Clear the timeout when the component unmounts
  useEffect(() => {
    return () => clearTimeout(hideMenuTimeout);
  }, []);

  return (
    <div
      className="floating-circle"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`menu-box ${showMenu ? 'show' : ''}`}>
        <ul>
          <li><FaHome /> Home</li>
          <li><FaInfoCircle /> About</li>
          <li><FaPhoneAlt /> Contact</li>
          <li><MdWorkOutline /> Work</li>
          <li><GiClockwork /> Plans</li>
          <li><IoShareSocialSharp /> Share</li>
        </ul>
      </div>
    </div>
  );
};

export default FloatingNavbar;
