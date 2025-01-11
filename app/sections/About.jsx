"use client"

import React, { useEffect, useRef } from 'react'
import { LuArrowDownRight } from "react-icons/lu"
import { motion, useInView } from 'motion/react'

const About = () => {

  const aboutRef = useRef()

  const isInView = useInView(aboutRef, {margin: "-100px"})

  const wordVariants = {
    hidden: {y: 50,opacity: 0},
    visible: {y: 0, opacity: 1}
  }

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section id='about' className='lg:px-20 px-8 py-20'>
      <div className='flex flex-col justify-center mt-5'>
        <div className='grid grid-cols-12'>
          <LuArrowDownRight size={100}/>
          <motion.h2 
          ref={aboutRef} 
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className='lg:text-[4rem] lg:col-span-7 lg:col-start-6 col-span-12 text-[2rem] font-semibold tracking-tighter flex gap-4'>
            {["WHO","AM","I","/"].map((w, i) => (
              <motion.p 
              variants={wordVariants}
              key={i}>
                {w}
              </motion.p>
            ))}
          </motion.h2>
        </div>
        <div className='lg:grid grid-cols-12 mt-20'>
          <div className='lg:col-span-4 col-span-12'>
            <img src="./myhero.png" alt="" />
          </div>
          <div className='lg:col-span-7 lg:col-start-6 col-span-12'>
            <div className='flex flex-col gap-y-10'>
              <h6 className='text-xl'>Quote goes here</h6>
              <div className='flex flex-col'>
                <span className='text-lg flex h-fit text-gray-500 font-medium tracking-tighter'>(ABOUT ME)</span>
                <p className='flex w-full max-w-[48ch] text-[1.5rem] text-balance text-gray-500'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus repellat voluptas possimus! Quae adipisci maxime aperiam harum modi, nihil fugit quasi perspiciatis nemo sit dolorum? Magnam sint nobis earum. Impedit!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
