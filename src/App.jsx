import { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

// 🌟 Lazy Load Components for Performance Optimization
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Service')); // ✅ Experience now has correct ID
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Achievements = lazy(() => import('./components/Achievements'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-teal-500 to-indigo-600 dark:from-gray-900 dark:to-gray-800 text-gray-100 dark:text-gray-200">
        
        {/* 🌟 Navbar - Always Visible */}
        <Navbar />

        {/* 🌟 Lazy Load Sections */}
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
          {/* ✅ Correct IDs for Navigation */}
          <section id="hero"><Hero /></section>
          <section id="about"><About /></section>
          <section id="experience"><Experience /></section> {/* ✅ Fixed Experience Section ID */}
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
