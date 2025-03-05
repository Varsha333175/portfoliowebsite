import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4z98wfv', 'template_7asc84p', e.target, 'PJE7IovR9US8PWQSp')
      .then((result) => {
        console.log('Result:', result);
        alert('Message sent successfully');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 py-20" id="contact">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Title with Animation */}
        <motion.h2
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <div className="flex flex-col md:flex-row md:space-x-12">
          
          {/* Contact Information */}
          <motion.div 
            className="flex-1 mb-8 md:mb-0 space-y-6" 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Let&apos;s Talk!
            </h3>
            <p className="text-lg">
              I&apos;m open to software engineering opportunities, collaborations, and networking. 
              Feel free to reach out to discuss new projects or just to say hello!
            </p>
            <div className="flex items-center">
              <FaEnvelope className="text-green-400 text-xl mr-3" />
              <a href="mailto:your-email@example.com" className="text-lg text-green-400 hover:underline">
                vreddy012025@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-green-400 text-xl mr-3" />
              <span className="text-lg">+1 7373269354</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkedAlt className="text-green-400 text-xl mr-3" />
              <span className="text-lg">Seatlle,Washington USA</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="from_name"
                  className="w-full p-3 rounded bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full p-3 rounded bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg mb-2">Message</label>
                <textarea 
                  name="message"
                  className="w-full p-3 rounded bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-3 rounded-full transform transition-transform duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
