import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/routes/Layout';
import Home from './pages/Home';
import About from './pages/About';
import AboutParams from './pages/AboutParams';
import AcademicsPages from './pages/AcademicsPages';
import Contact from './pages/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 300, // animation duration
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/about/:pageId" element={<AboutParams />} />
          <Route path="/academics/:pageId" element={<AcademicsPages />} />
          {/* /academics/promotion-policy */}
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
