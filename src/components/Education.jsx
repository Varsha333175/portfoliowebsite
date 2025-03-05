import UncImage from '../assets/uncc.png'; // UNC Charlotte logo
import JntuImage from '../assets/Cvr.jpg'; // JNTU logo
import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types"; // ✅ Import PropTypes for validation

const education = [
  {
    institution: "University of North Carolina at Charlotte",
    degree: "Master of Computer Science",
    duration: "Jan 2023 - May 2024",
    coursework: "Algorithms, Cloud Computing, Database Systems, Machine Learning, Web Development",
    gpa: "4.0/4.0",
    accomplishments: [
      "Graduate Research Assistant - AI & NLP",
      "Published Paper on Cloud Security Optimization",
      "Dean’s List Awardee",
      "Developed AI-powered Cloud Security Model"
    ],
    image: UncImage
  },
  {
    institution: "Jawaharlal Nehru Technological University",
    degree: "Bachelor of Technology in Computer Science",
    duration: "Graduated: May 2021",
    coursework: "Data Structures, Operating Systems, Computer Networks, AI & ML",
    gpa: "3.7/4.0",
    accomplishments: [
      "Developed a Smart Traffic Management System using IoT",
      "Final Year Research Project on AI-Powered Chatbots",
      "Top 5% in Class",
      "Certified in Full-Stack Web Development"
    ],
    image: JntuImage
  },
];

const Education = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 py-20" id="education">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Title */}
        <motion.h2 
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {education.map((edu, index) => (
            <FlipCard key={index} education={edu} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

/* Flip Card Component */
const FlipCard = ({ education, index }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-full h-80 perspective cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.3 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`relative w-full h-full transform transition-transform duration-700 ${flipped ? "rotate-y-180" : ""}`}>
        
        {/* Front Side (Now Includes Degree) */}
        <div className={`absolute w-full h-full bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col items-center justify-center p-6 backface-hidden ${flipped ? "hidden" : ""}`}>
          <img src={education.image} alt={education.institution} className="w-24 h-24 object-contain mb-4" />
          <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
            {education.institution}
          </h3>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-1">{education.degree}</p>
          <p className="text-md text-gray-500 dark:text-gray-400">{education.duration}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Click to View Achievements</p>
        </div>

        {/* Back Side - Fully Visible Achievements */}
        <div className={`absolute w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg rounded-lg flex flex-col items-center justify-start p-6 transform rotate-y-180 ${!flipped ? "hidden" : ""}`}>
          <h3 className="text-2xl font-bold text-center">{education.degree}</h3>
          <p className="mt-2 text-lg">{education.duration}</p>
          <p className="mt-2 text-lg font-semibold">📊 GPA: {education.gpa}</p>
          
          {/* Accomplishments List */}
          <div className="mt-4 text-sm text-center">
            <span className="font-semibold">🏆 Accomplishments:</span>
            <ul className="mt-1 text-xs opacity-100">
              {education.accomplishments.map((item, i) => (
                <li key={i} className="mt-1">✅ {item}</li>
              ))}
            </ul>
          </div>

          <p className="text-xs mt-3 opacity-90">Click to Flip Back</p>
        </div>

      </div>
    </motion.div>
  );
};

/* ✅ Add PropTypes Validation */
FlipCard.propTypes = {
  education: PropTypes.shape({
    institution: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    gpa: PropTypes.string.isRequired,
    accomplishments: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Education;
