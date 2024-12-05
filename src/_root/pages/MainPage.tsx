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
// import Testimonials from './Testimonials';

const MainPage = () => {
  return (
    <div>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Skills />
      <BlogSection/>
      <FAQ/>
      <End/>
      {/* <Testimonials /> */}
    </div>
  );
};

export default MainPage;
