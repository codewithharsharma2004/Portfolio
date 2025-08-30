import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold relative w-fit mx-auto
               after:content-[''] after:block after:w-0 after:h-[3px] 
               after:bg-gradient-to-r from-purple-400 to-pink-600 
               after:transition-all after:duration-300 
               hover:after:w-full"
      >
        Experience
      </motion.h2>

      {/* Experience List */}
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-12 flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-center lg:space-x-10"
          >
            {/* Year */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>

            {/* Role + Description */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role}{" "}
                <span className="text-sm text-purple-300">
                  - {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center lg:justify-start">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
