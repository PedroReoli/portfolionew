// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RootLayout from './_root/RootLayout/RootLayout';
import Home from './_root/pages/Home';
import About from './_root/pages/About';
import Experience from './_root/pages/Experience';
import Projects from './_root/pages/Projects';
import Services from './_root/pages/Services';
import Skills from './_root/pages/Skills';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Services />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
