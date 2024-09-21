import React from 'react';
import './Logo.css'; // Import your external CSS

const Logo = () => {
  return (
    <div className="main_head m-4 flex items-center">
      <div className="first_div flex items-center justify-center rounded-full border-4 border-black bg-slate-400 p-3 text-center">
        <span className="text text-[42px] font-bold tracking-wider text-purple-700">PC</span>
      </div>

      <div className="expand_div ml-2 hidden overflow-hidden border-x-8 border-x-yellow-300 items-center justify-center p-2">
        <span className="text-2xl font-normal text-gray-500">
          <span className="word">WebCoder</span>
          <span className="word">||</span>
          <span className="word">Web Developer</span>
          <span className="word">||</span>
          <span className="word">Designer</span>
        </span>
      </div>
    </div>
  );
};

export default Logo;
