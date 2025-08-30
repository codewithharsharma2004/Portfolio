import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"

const Projects = () => {
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
        Projects
      </motion.h2>

      {/* Projects List */}
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-center lg:space-x-10"
          >
            {/* Project Image */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center lg:flex-row w-full lg:w-11/12 hover:scale-105 transition-transform duration-300"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4 flex justify-center"
              >
                <img
                  src={project.image}
                  width={200}
                  height={200}
                  alt={project.title}
                  className="mb-6 rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Project Details */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap justify-center lg:justify-start">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
