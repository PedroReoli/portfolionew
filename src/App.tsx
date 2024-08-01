// src/App.tsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RootLayout from '@/_root/RootLayout';
import { Home, About, Experience, Projects, Services, Skills } from '@/_root/pages';

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
