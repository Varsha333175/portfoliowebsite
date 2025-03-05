import { FaPython, FaJava, FaJsSquare, FaReact, FaAngular, FaDatabase, FaGitAlt, FaLinux } from "react-icons/fa";
import { SiMysql, SiMongodb, SiAwsamplify, SiDocker } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  {
    id: 1,
    name: "React.js & React Native",
    icon: <FaReact size={40} />,
    proficiency: 90,
    description: "Developed scalable mobile & web apps with Redux and Hooks."
  },
  {
    id: 2,
    name: "Angular",
    icon: <FaAngular size={40} />,
    proficiency: 80,
    description: "Built dynamic, component-driven applications with RxJS."
  },
  {
    id: 3,
    name: "JavaScript (Node.js)",
    icon: <FaJsSquare size={40} />,
    proficiency: 90,
    description: "Designed REST APIs & real-time apps with WebSockets."
  },
  {
    id: 4,
    name: "Python",
    icon: <FaPython size={40} />,
    proficiency: 85,
    description: "Developed AI-powered APIs & secure authentication systems."
  },
  {
    id: 5,
    name: "Java",
    icon: <FaJava size={40} />,
    proficiency: 85,
    description: "Created microservices & enterprise-scale applications."
  },
  {
    id: 6,
    name: "Databases (SQL & NoSQL)",
    icon: <FaDatabase size={40} />,
    proficiency: 90,
    description: "Optimized relational & NoSQL databases for high scalability."
  },
  {
    id: 7,
    name: "MySQL",
    icon: <SiMysql size={40} />,
    proficiency: 85,
    description: "Designed optimized database schemas & queries."
  },
  {
    id: 8,
    name: "MongoDB",
    icon: <SiMongodb size={40} />,
    proficiency: 85,
    description: "Built real-time apps & scalable NoSQL databases."
  },
  {
    id: 9,
    name: "AWS & Cloud Computing",
    icon: <SiAwsamplify size={40} />,
    proficiency: 90,
    description: "Deployed serverless architectures with Lambda & S3."
  },
  {
    id: 10,
    name: "Docker",
    icon: <SiDocker size={40} />,
    proficiency: 80,
    description: "Implemented CI/CD workflows with container orchestration."
  },
  {
    id: 11,
    name: "Linux & Bash Scripting",
    icon: <FaLinux size={40} />,
    proficiency: 80,
    description: "Developed shell scripts & automated system tasks."
  },
  {
    id: 12,
    name: "Git & DevOps",
    icon: <FaGitAlt size={40} />,
    proficiency: 90,
    description: "Managed version control & automated CI/CD pipelines."
  }
];

const Skills = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              {/* Skill Icon */}
              <div className="flex items-center space-x-3">
                {skill.icon}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h3>
              </div>

              {/* Proficiency Bar */}
              <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2.5 mt-3 relative">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{`${skill.proficiency}% Proficiency`}</p>

              {/* Hidden Details - Reveal on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center"
              >
                <h3 className="text-xl font-bold">{skill.name}</h3>
                <p className="text-sm opacity-90 mt-2">{skill.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
