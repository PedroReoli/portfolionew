// src/_root/pages/MainPage.tsx

import Home from './Home';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';
// import Contact from './Contact';
const MainPage = () => {
  return (
    <div>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Skills />
      {/* <Contact/> */}
    </div>
  );
};

export default MainPage;
