import { useRef, useState, useEffect } from "react"; // Import hooks
import { FaTrophy, FaStar, FaChartLine, FaUsers, FaLightbulb } from "react-icons/fa"; // Example icons

const achievements = [
  {
    title: "Best Employee of the Quarter",
    description:
      "Recognized for outstanding contributions, leadership, and problem-solving capabilities in delivering scalable software solutions.",
    icon: <FaTrophy className="text-yellow-500 text-4xl" />, // Example icon
  },
  {
    title: "Automated Workflows - Reduced Manual Effort by 70%",
    description:
      "Designed and implemented automation that streamlined operational processes, leading to a 70% reduction in manual work.",
    icon: <FaChartLine className="text-green-500 text-4xl" />, // Example icon
  },
  {
    title: "College Level Hackathon Winner",
    description:
      "Developed an innovative solution within 24 hours that tackled real-world challenges, securing the first place among 50+ teams.",
    icon: <FaStar className="text-blue-500 text-4xl" />, // Example icon
  },
  {
    title: "Best Abstract Idea - Inter-College Coding Competition",
    description:
      "Awarded for presenting a forward-thinking tech solution with strong feasibility and scalability.",
    icon: <FaLightbulb className="text-orange-500 text-4xl" />, // Example icon
  },
  {
    title: "Best Leadership Award",
    description:
      "Recognized for exceptional team management and the ability to drive projects to success under tight deadlines.",
    icon: <FaUsers className="text-purple-500 text-4xl" />, // Example icon
  },
];

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    const rect = sectionRef.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className={`bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 py-20 ${
        isVisible ? "animate-fadeInUp" : ""
      }`}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Title */}
        <h2
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
        >
          Achievements
        </h2>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex items-center space-x-6"
            >
              <div className="flex-shrink-0">{achievement.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {achievement.title}
                </h3>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
