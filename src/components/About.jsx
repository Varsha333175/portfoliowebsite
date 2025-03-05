import { useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ResumePDF from '../assets/Varsha_SDE.pdf';

const roadmapSteps = [
  { title: "📍 Now", description: "Strengthening distributed systems, API security, and cloud development.", align: "left" },
  { title: "🚀 Next", description: "Deep dive into scalable architecture, system design patterns, and AI-driven solutions.", align: "right" },
  { title: "🌟 Future", description: "Lead engineering teams, drive end-to-end product development, and contribute to high-impact projects.", align: "left" }
];

// Animation Variants
const stepVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -100 : 100,
    scale: 0.9,
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  }
};

const About = () => {
  const sectionRef = useRef(null);

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 py-20 px-6 md:px-12"
      id="about"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <motion.h2 
          className="text-5xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* About Description */}
        <motion.p 
          className="text-lg leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          I am a <span className="font-semibold text-indigo-600 dark:text-indigo-400">Full-Stack Engineer</span> passionate about building 
          <span className="font-semibold text-indigo-600 dark:text-indigo-400"> scalable, high-performance applications</span> with expertise in 
          <span className="font-semibold text-indigo-600 dark:text-indigo-400"> backend architecture, cloud computing, and system design</span>. 
          My approach to software development is simple yet effective – crafting maintainable, efficient, and innovative solutions.
        </motion.p>

        {/* 🚀 Animated Zig-Zag Roadmap */}
        <motion.div 
          className="p-8 rounded-lg shadow-lg mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold flex items-center justify-center mb-6 text-white">
            🚀 My Roadmap
          </h3>

          {/* Roadmap Timeline with Smooth Zig-Zag Animation */}
          <div className="relative flex flex-col items-center w-full">
            <div className="absolute w-1 bg-white h-full left-1/2 transform -translate-x-1/2"></div>

            {roadmapSteps.map((step, index) => (
              <motion.div 
                key={index}
                className={`relative flex w-full mb-10 ${step.align === "left" ? "justify-start" : "justify-end"}`}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                custom={step.align}
              >
                <div className="relative bg-white dark:bg-gray-700 p-6 rounded-lg shadow-xl w-2/5 transform transition-transform">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">{step.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
                <div className="absolute w-10 h-10 bg-white text-indigo-500 font-bold flex items-center justify-center rounded-full shadow-md left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 🎯 What I Look for in a Role */}
        <motion.div 
          className="bg-gradient-to-r from-green-400 to-blue-500 p-8 rounded-lg shadow-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-2xl font-semibold flex items-center justify-center mb-6 text-white">
            🎯 What I Look for in a Role
          </h3>
          <ul className="text-lg space-y-3 text-white">
            <li>🚀 <span className="font-semibold">Challenging Problems:</span> Opportunities to solve complex, large-scale challenges.</li>
            <li>🤝 <span className="font-semibold">Collaboration:</span> A team that values mentorship, learning, and knowledge-sharing.</li>
            <li>📈 <span className="font-semibold">Growth:</span> A role that encourages innovation, ownership, and technical excellence.</li>
          </ul>
        </motion.div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center space-x-6">
          {[
            { icon: <FaLinkedin size={32} />, link: "https://www.linkedin.com/in/tvarshar/", color: "text-blue-600" },
            { icon: <FaGithub size={32} />, link: "https://github.com/Varsha333175", color: "text-gray-700" },
            { icon: <FaEnvelope size={32} />, link: "mailto:vreddy012025@gmail.com", color: "text-red-600" },
          ].map((item, index) => (
            <motion.a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${item.color} hover:scale-125 transition-transform`}
              whileHover={{ scale: 1.2 }}
            >
              {item.icon}
            </motion.a>
          ))}

          {/* Resume Button */}
          <motion.a
            href={ResumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-lg shadow-xl hover:scale-110 transition-transform"
            whileHover={{ scale: 1.1 }}
          >
            <FaFilePdf size={20} className="mr-2" /> View Resume
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default About;
