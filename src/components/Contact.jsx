import React from 'react';
import { CONTACT } from '../constants';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 px-6">
      {/* Heading */}
      <motion.h2
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl font-bold relative w-fit mx-auto
               after:content-[''] after:block after:w-0 after:h-[3px] 
               after:bg-gradient-to-r from-purple-400 to-pink-600 
               after:transition-all after:duration-300 
               hover:after:w-full">
  Get in Touch
</motion.h2>

      <motion.p
      whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:2}}
         className="text-center text-neutral-400 mb-10">
        Let’s work together on something amazing 🚀
      </motion.p>

      {/* Contact Info */}
      <motion.div 
      whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:2.5}}
      className="flex flex-col items-center space-y-6 text-lg">
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-red-500" />
          <p>{CONTACT.address}</p>
        </div>

        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-green-500" />
          <a href={`tel:${CONTACT.phoneNo}`} className="hover:text-green-400 transition">
            {CONTACT.phoneNo}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <FaEnvelope className="text-blue-500" />
          <a href={`mailto:${CONTACT.email}`} className="hover:text-blue-400 transition">
            {CONTACT.email}
          </a>
        </div>
      </motion.div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-10 text-2xl">
        <a 
          href="https://www.linkedin.com/in/harsh-sharma-972844356/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-transform transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/codewithharsharma2004" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-transform transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.instagram.com/harsh.sharma2004/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-transform transform hover:scale-110"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Contact;
