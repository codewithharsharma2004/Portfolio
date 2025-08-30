import React from 'react'
import about from "/src/assets/about.jpg";
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-x-neutral-900 pb-4">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl font-bold relative w-fit mx-auto
               after:content-[''] after:block after:w-0 after:h-[3px] 
               after:bg-gradient-to-r from-purple-400 to-pink-600 
               after:transition-all after:duration-300 
               hover:after:w-full"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>

      {/* Content */}
      <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start lg:space-x-10">
        {/* Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md p-6 flex justify-center"
        >
          <img className="rounded-2xl shadow-lg" src={about} alt="about" />
        </motion.div>

        {/* Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl p-6 text-center lg:text-left"
        >
          <p className="my-2 py-6 text-lg leading-relaxed">{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </div>
  )
}

export default About
