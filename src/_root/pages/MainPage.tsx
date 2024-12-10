// src/_root/pages/MainPage.tsx

import Home from './Home';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';
import FAQ from './FAQ';
import BlogSection from './BlogSection ';
import End from './End';
import { useState, useEffect } from 'react';
import ResponsiveAbout from '@/Responsive/ResponsiveAbout';
import ResponsiveExperience from '@/Responsive/ResponsiveExperience';
import ResponsiveProjects from '@/Responsive/ResponsiveProjects';
import ResponsiveServices from '@/Responsive/ResponsiveServices';
import ResponsiveSkillsSection from '@/Responsive/ResponsiveSkillsSection';
import ResponsiveBlogSection from '@/Responsive/ResponsiveBlogSection';
import ResponsiveFAQ from '@/Responsive/ResponsiveFAQ';
import ResponsiveEnd from '@/Responsive/ResponsiveEnd';
// import Testimonials from './Testimonials';

const MainPage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleResize = () => {
    const width = window.innerWidth;
    setIsSmallScreen(width <= 720);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      <Home />
      {/*               Guias Responsivas           Guias Normais       */}
      {isSmallScreen ? <ResponsiveAbout/>         : <About/>}
      {isSmallScreen ? <ResponsiveExperience/>    : <Experience/>}
      {isSmallScreen ? <ResponsiveProjects/>      : <Projects/>}
      {isSmallScreen ? <ResponsiveServices/>      : <Services/>}
      {isSmallScreen ? <ResponsiveSkillsSection/> : <Skills/>}
      {isSmallScreen ? <ResponsiveBlogSection/>   : <BlogSection/>}
      {isSmallScreen ? <ResponsiveFAQ/>           : <FAQ/>}
      {isSmallScreen ? <ResponsiveEnd/>           :<End/>}
      {/* Guias pro Futuro */}
      {/* <Testimonials /> */} 
    </div>
  );
};

export default MainPage;
