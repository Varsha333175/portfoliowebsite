import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar';
import './App.css';

// 🌟 Initialize Google Analytics
ReactGA.initialize("G-Q4E6W4P28P", { debug: true });

function TrackPageView() {
  const location = useLocation();

  useEffect(() => {
    console.log("GA Tracking Page:", location.pathname);
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]); // ✅ Tracks route changes

  return null;
}

// 🌟 Lazy Load Components for Performance Optimization
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Service'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Achievements = lazy(() => import('./components/Achievements'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <Router>
      <TrackPageView /> {/* ✅ GA Tracking */}

      <div className="bg-gradient-to-br from-teal-500 to-indigo-600 dark:from-gray-900 dark:to-gray-800 text-gray-100 dark:text-gray-200">
        
        {/* 🌟 Navbar - Always Visible */}
        <Navbar />

        {/* 🌟 Lazy Load Sections */}
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
          <section id="hero"><Hero /></section>
          <section id="about"><About /></section>
          <section id="experience"><Experience /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="certifications"><Certifications /></section>
          <section id="achievements"><Achievements /></section>
          <section id="education"><Education /></section>
          <section id="contact"><Contact /></section>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
