import React, { useState } from "react";
import { technologies } from "../constants";
import BallCanvas from "./canvas/Ball";
import SectionWrapper from "../hoc/SectionWrapper";

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <>
      <h1 className="sm:text-[18px] text-[20px] text-secondary uppercase tracking-wider font-bold mb-2">
        What I Know and What I Learn?
      </h1>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div
            className='w-28 h-28 flex flex-col items-center'
            key={technology.name}
            onMouseEnter={() => setHoveredTech(technology.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <BallCanvas icon={technology.icon} />
            {/* Conditionally show the technology name below the ball */}
            <div className="mt-2 text-center text-secondary font-medium">
              {hoveredTech === technology.name ? technology.name : ""}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
