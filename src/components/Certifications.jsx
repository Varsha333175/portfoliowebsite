import { useRef, useState, useEffect } from 'react';

// Import certification images
import CyberArkImage from '../assets/Sentry.webp'; // CyberArk PAM
import ComptiaImage from '../assets/comptia.svg'; // CompTIA Security+
import DataCampImage from '../assets/datacamp.png'; // Single DataCamp logo
import AwsImage from '../assets/aws solutions.png'; // AWS Certifications Logo

// Updated Certifications List
const certifications = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    description: 'Certified in designing secure, scalable, and cost-efficient cloud architectures on AWS.',
    url: 'https://www.credly.com/badges/aws-solutions-architect-associate', // Replace with actual link
    image: AwsImage
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    description: 'Earned certification for foundational knowledge of AWS cloud concepts, services, and security.',
    url: 'https://www.credly.com/badges/aws-cloud-practitioner', // Replace with actual link
    image: AwsImage
  },
  {
    title: 'CyberArk PAM Certified',
    description: 'Certified in CyberArk Privileged Access Management (PAM), specializing in identity security and threat protection.',
    url: 'https://www.credly.com/badges/cf47d801-d982-435f-b2c2-c398b6f6891d/linked_in_profile',
    image: CyberArkImage
  },
  {
    title: 'CompTIA Security+ (Ongoing)',
    description: 'Currently pursuing CompTIA Security+ to strengthen expertise in cybersecurity fundamentals.',
    image: ComptiaImage
  },
  {
    title: 'DataCamp Certifications',
    description: 'Completed multiple certifications in Python, SQL, Deep Learning, Data Engineering, and Machine Learning.',
    url: '/mnt/data/', // Update this with a common link if available
    image: DataCampImage
  }
];

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    const rect = sectionRef.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className={`bg-white dark:bg-black text-black dark:text-white py-20 ${
        isVisible ? 'animate-zoomIn' : ''
      }`}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105 flex items-center space-x-6"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {cert.title}
                    </a>
                  ) : (
                    cert.title
                  )}
                </h3>
                <p className="text-lg">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
