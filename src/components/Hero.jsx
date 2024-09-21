import { motion } from "framer-motion";
import { styles } from "../styles";
import './Hero.css';  // Make sure this is correctly imported
import Button from "./utils/Button";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left side indicator and gradient */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Main text content */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi,<span className="waving-hand">👋</span>, I'm <br />
            <span className='text-[#915EFF]'>Pawan Chaukiyal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I develop  
            <span className="text-yellow-400 ml-2">
             3D visuals, user <br className='sm:block hidden' />
            interfaces, web design and web applications.
            </span>
          </p>
        </div>

        <div className="absolute  xs:bottom-[20rem] bottom-[28rem] left-0 right-0 lg:w-full z-10 sm:px-10 px-5 ">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit  md:min-w-96" />
        </a>
      </div>
      </div>

      {/* Scroll down indicator */}
      <div className='absolute xs:bottom-[10rem] bottom-[22rem] w-full flex justify-center items-center '>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
