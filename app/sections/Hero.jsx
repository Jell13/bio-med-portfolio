"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll } from 'motion/react'

const Hero = () => {

    const heroRef = useRef()

    const isInView = useInView(heroRef, {margin: "-100px"})

    const wordVariants = {
      hidden: {y: 50, opacity: 0},
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
    <motion.header 
    className='h-screen py-20 lg:px-20 px-8'>
      <div className='w-full h-full flex justify- items-center'>
        <div className='flex flex-col gap-6'>
          <motion.h1 
          ref={heroRef} 
          variants={staggerChildren} 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className='lg:text-[5rem] text-[3rem] font-semibold leading-tight tracking-tighter'>
            {["JULIA SUTEDJO", "BIOMEDICAL ENGINEER"].map((w, index) => (
              <motion.p
              key={index}
              variants={wordVariants}
              >{w}</motion.p>
            ))}
          </motion.h1>
          <div className='relative lg:hidden group inline-block'>
            <button className='font-medium lg:text-[1.5rem] border rounded-lg px-2 active:bg-black active:text-white duration-200 border-black'>Email me</button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Hero
