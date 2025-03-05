import { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
  };

  // Load Dark Mode Preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-opacity-80 backdrop-blur-lg bg-gray-200 dark:bg-gray-900 transition-all duration-300 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <a href="#home" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">
          Varsha
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["Home", "About", "Education", "Skills", "Experience", "Projects", "Certifications", "Achievements", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="relative text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-teal-400 transition-all duration-200"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-teal-400 transform scale-x-0 transition-transform duration-200 hover:scale-x-100"></span>
            </a>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="text-xl focus:outline-none transition-transform transform hover:scale-110">
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-500" />}
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-xl focus:outline-none ml-4" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-200 dark:bg-gray-900 py-4">
          <div className="flex flex-col items-center space-y-4">
            {["Home", "About", "Education", "Skills", "Experience", "Projects", "Certifications", "Achievements", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-teal-400 transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
