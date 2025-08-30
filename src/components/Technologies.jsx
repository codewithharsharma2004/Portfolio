import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { FaJava } from "react-icons/fa";          
import { SiTailwindcss } from "react-icons/si"; 
import { SiSupabase } from "react-icons/si";      
import { FaHtml5 } from "react-icons/fa"; 
import { SiMongodb } from "react-icons/si";      
import { FaNodeJs } from "react-icons/fa";  
import {FaCss3Alt} from "react-icons/fa";
import {FaJs } from "react-icons/fa";
import {inView, motion} from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -6, 0],   // smoother float (instead of 10 to -10)
    transition: {
      duration: duration,
      ease: "easeInOut",  // smooth curve
      repeat: Infinity,
    },
  },
});
8



const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 '>
     <motion.h2 
     whileInView={{opacity:1, y:0}}
     initial={{opacity:0, y:-100}}
     transition={{duration:1.5}}
     className="my-20 text-center text-4xl font-bold relative w-fit mx-auto
               after:content-[''] after:block after:w-0 after:h-[3px] 
               after:bg-gradient-to-r from-purple-400 to-pink-600 
               after:transition-all after:duration-300 
               hover:after:w-full">
  Technologies
</motion.h2>

      <motion.div whileInView ={{opacity:1, x:0}}
      initial={{opacity: 0, x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-x-neutral-800 p-4">
            <FaJava  className='text-7xl text-[#E76F00]'/>
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-x-neutral-800 p-4">
            <RiReactjsLine  className='text-7xl text-cyan-400'/>
        </motion.div>
        
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-x-neutral-800 p-4">
            <SiTailwindcss  className='text-7xl text-sky-400'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-x-neutral-800 p-4">
            <SiSupabase className='text-7xl text-green-500'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-x-neutral-800 p-4">
            <FaHtml5 className='text-7xl ext-orange-500'/>
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-x-neutral-800 p-4">
            <SiMongodb className='text-7xl text-green-600'/>
        </motion.div>
        <motion.div variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-x-neutral-800 p-4">
            <FaNodeJs  className='text-7xl text-green-500'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-x-neutral-800 p-4">
            <FaCss3Alt className='text-7xl  text-[#1572B6]'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-x-neutral-800 p-4">
            <FaJs className='text-7xl text-[#F7DF1E]'/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
