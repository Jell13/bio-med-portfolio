import { motion, useInView } from 'motion/react'
import React, { useRef } from 'react'

const Works = () => {

  const workRef = useRef()

  const isInView = useInView(workRef, {margin: "-100px"})

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
    <section id='works' className='lg:px-20 px-8 py-20'>
      <div className='flex flex-col mt-5'>
        <motion.h2 
        ref={workRef}
        variants={staggerChildren}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className='lg:text-[4rem] text-[2rem] font-semibold tracking-tighter flex gap-4'>
          {["PROFESSIONAL", "HISTORY"].map((w, i) => (
            <motion.p 
            variants={wordVariants}
            key={i}>
              {w}
            </motion.p>
          ))}
        </motion.h2>
      </div>
    </section>
  )
}

export default Works
