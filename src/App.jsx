import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Plans, Feedbacks, Hero, Navbar, Tech, Works, Contact, StarsCanvas, WorkExperience } from "./components";
import Footer from './components/Footer';
import ResumeButton from './components/ResumeButton';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative bg-primary z-0'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <ResumeButton/>
          <div id="hero">
          <Hero />
        </div>          
        </div>
        <div id="about">
          <About />
        </div>
        <div id="work-experience">
          <WorkExperience />
        </div>
        <div id="tech">
          <Tech />
        </div>
        <div id="works">
          <Works />
        </div>
        <div id="plans">
          <Plans />
        </div>
        <div id="feedbacks">
          <Feedbacks />
        </div>
        <div className='relative z-0' id="contact">
          <Contact />
          <StarsCanvas />
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
