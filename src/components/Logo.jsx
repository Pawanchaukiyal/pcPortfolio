import React, { useState } from 'react';
import './Logo.css';

const Logo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="main_head  flex items-center ">
      {/* Circle Logo */}
      <div
        className="logo-container relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-400 cursor-pointer border-4 border-y-black-100 flex items-center justify-center hover:animate-spin-logo"
        onClick={handleExpand}
      >
        <span className="rotate-text text-3xl font-bold tracking-wider text-purple-800">PC</span>
      </div>
    </div>
  );
};

export default Logo;
