import PwCImage from '../assets/pwc.png'; // PwC logo
import DXCImage from '../assets/dxc.png'; // DXC Technology logo

const experience = [
  {
    company: "PwC US",
    image: PwCImage,
    position: "Software Engineer",
    duration: "Sep 2021 – Jan 2023",
    details: [
      "Developed Java Spring Boot backend with RESTful APIs/microservices, enabling efficient fault-tolerant workflows for transactions.",
      "Crafted dynamic UIs using React, implementing reusable components and achieving seamless user experiences across devices.",
      "Architected AWS cloud-native systems (EC2, Lambda, RDS) processing millions of transactions daily with seamless integration.",
      "Designed CI/CD pipelines via Jenkins, Docker, and Kubernetes, automating build, testing, and deployment for rapid development.",
      "Optimized terabyte-scale AWS S3 and DynamoDB data strategies for real-time access, improving storage retrieval efficiency.",
      "Diagnosed and resolved production issues through root cause analysis and debugging, ensuring system stability and reliability.",
      "Authored API documentation and system designs, expediting developer onboarding, fostering collaboration, and speeding up project delivery."
    ],
  },
  {
    company: "DXC Technology",
    image: DXCImage,
    position: "Associate Software Engineer",
    duration: "Dec 2020 – Sep 2021",
    details: [
      "Built secure REST APIs in Spring Boot for healthcare data, using OAuth2 and integrating seamlessly with third-party systems.",
      "Optimized backend services with advanced data structures, enhancing responsiveness for real-time, data-heavy operations.",
      "Engineered scalable database solutions by tuning SQL queries and optimizing indexes for rapid retrieval in enterprise systems.",
      "Created modular Angular/Bootstrap UI components, ensuring cross-platform responsiveness and WCAG-aligned accessibility.",
      "Automated CI/CD with Jenkins and Docker, accelerating builds, tests, deployments, and promoting continuous delivery.",
      "Delivered features in Agile sprints, collaborating cross-functionally to solve complex challenges and meet deadlines effectively."
    ],
  },
];

const Experience = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20" id="experience">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105 flex space-x-6"
            >
              <img
                src={exp.image}
                alt={exp.company}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  {exp.company}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{exp.position}</p>
                <p className="text-gray-600 dark:text-gray-400">{exp.duration} - {exp.location}</p>
                <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
