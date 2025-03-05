import TypingEffect from 'react-typing-effect';
import HeroImage from '../assets/my avatar.webp';

const Hero = () => {
  return (
    <div className='text-center py-16 bg-white dark:bg-black text-black dark:text-white'>
      <img 
        src={HeroImage} 
        alt="Varsha Thondalapally" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105' 
      />
      <h1 className='text-4xl font-bold mb-4'>
        <TypingEffect
          text={['Hello!', "I'm Varsha Thondalapally", "A Passionate Software Engineer"]}
          speed={50}
          eraseDelay={2000}
          typingDelay={500}
          cursorRenderer={cursor => <span className="text-black dark:text-white">{cursor}</span>}
        />
      </h1>
      <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
        <span className='font-semibold text-gray-800 dark:text-gray-200'>
          Passionate about building scalable, high-performance software solutions. Excited to explore new challenges and contribute innovative ideas in a dynamic work environment!
        </span>
      </p>

      {/* Social Links */}
      <div className="mt-6 flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/tvarshar/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
          LinkedIn
        </a>
        <a href="https://github.com/Varsha333175" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:underline">
          GitHub
        </a>
        <a href="https://react-native-portfolio-dkg1.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 hover:underline">
          Portfolio
        </a>
      </div>
    </div>
  );
};

export default Hero;
