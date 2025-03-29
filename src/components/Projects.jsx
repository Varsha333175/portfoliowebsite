import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // ✅ Fixed import

// Import project images
import reactNativeImage from "../assets/react-native.webp";
import resumeAutomationImage from "../assets/resume-automation.webp";
import weatherReportImage from "../assets/live-weather.webp";
import arPortfolioImage from "../assets/ar-portfolio.webp";
import mazeImage from "../assets/maze.webp";
import gamifiedPortfolioImage from "../assets/gamified-portfolio.webp";
import fileTransferImage from "../assets/file-transfer.webp";
import chatServerImage from "../assets/chat server.webp";
import caesarCipherImage from "../assets/ceaser cipher tool.webp";
import tcpChatImage from "../assets/tcp chat.webp";
import fakeNewsImage from "../assets/fake news detector pluguin ui.webp";
import stock from "../assets/stock-prediction.png";
const projects = [
  {
    id: 1,
    name: "React Native Portfolio",
    technologies: "React Native, JavaScript",
    image: reactNativeImage,
    github: "https://github.com/Varsha333175/react--native_portfolio",
    liveDemo: "https://react-native-portfolio-dkg1.onrender.com",
    description: "A portfolio app built with React Native to showcase projects in a mobile-friendly UI."
  },
  {
    id: 2,
    name: "Resume Automation",
    technologies: "Python, NLP",
    image: resumeAutomationImage,
    github: "https://github.com/Varsha333175/resumeautomation",
    description: "An automation tool that extracts key details from resumes using NLP techniques."
  },
  {
    id: 3,
    name: "Live Weather Report UI",
    technologies: "JavaScript, API Integration",
    image: weatherReportImage,
    github: "https://github.com/Varsha333175/live_weather_report_ui",
    liveDemo:"https://live-weather-report-ui.onrender.com",
    description: "A real-time weather dashboard that fetches live data from APIs."
  },
  {
    id: 4,
    name: "AR Portfolio",
    technologies: "Augmented Reality, CSS",
    image: arPortfolioImage,
    github: "https://github.com/Varsha333175/ar_portfolio",
    liveDemo: "https://varsha333175.github.io/ar_portfolio/",
    description: "A next-gen portfolio using Augmented Reality for immersive user experience."
  },
  {
    id: 5,
    name: "Stock Prediction Model",
    technologies: "Python, LSTM, Pandas",
    image: stock,
    github: "https://github.com/Varsha333175/portfoliowebsite",
    description: "A deep learning model using LSTM networks to forecast stock prices based on historical data."
  },
  {
    id: 6,
    name: "Gamified Portfolio",
    technologies: "JavaScript, Gamification",
    image: gamifiedPortfolioImage,
    github: "https://github.com/Varsha333175/gamified-portfolio",
    description: "A portfolio designed with gamification elements for an interactive experience."
  },
  {
    id: 7,
    name: "File Transfer App",
    technologies: "JavaScript, WebRTC",
    image: fileTransferImage,
    github: "https://github.com/Varsha333175/filetransfer",
    description: "A peer-to-peer file transfer system built using WebRTC and JavaScript."
  },
  {
    id: 8,
    name: "Chat Server",
    technologies: "CSS, JavaScript",
    image: chatServerImage,
    github: "https://github.com/Varsha333175/chatserver",
    liveDemo: "https://chatserver-x535.onrender.com",
    description: "A real-time chat server implementation with user authentication."
  },
  {
    id: 9,
    name: "Caesar Cipher Tool",
    technologies: "JavaScript, Cryptography",
    image: caesarCipherImage,
    github: "https://github.com/Varsha333175/caesar-cipher-tool",
    description: "An encryption tool that encodes and decodes messages using Caesar Cipher."
  },
  {
    id: 10,
    name: "TCP Chat Application",
    technologies: "Shell Scripting, Networking",
    image: tcpChatImage,
    github: "https://github.com/Varsha333175/tcp-chat-app",
    description: "A TCP-based chat application for secure communication between clients."
  },
  {
    id: 11,
    name: "Fake News Detector Plugin",
    technologies: "SCSS, AI, NLP",
    image: fakeNewsImage,
    github: "https://github.com/Varsha333175/FakeNewsDetectorPlugin",
    liveDemo: "https://fakenewsdetectorplugin.onrender.com",
    description: "A browser extension that detects and flags fake news using AI models."
  },
  
  {
    id: 12,
    name: "Maze Game",
    technologies: "JavaScript, WebGL",
    image: mazeImage,
    github: "https://github.com/Varsha333175/maze",
    description: "A classic maze-solving game implemented using JavaScript."
  },

  
  
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />

              {/* Project Title */}
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>

              {/* Technologies Used */}
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.technologies}</p>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>

              {/* Buttons */}
              <div className="flex space-x-4">
                {/* GitHub Button */}
                <a
                  href={project.github}
                  className="inline-flex items-center bg-gradient-to-r from-gray-600 to-gray-900 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>

                {/* Live Demo Button (if available) */}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    className="inline-flex items-center bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;