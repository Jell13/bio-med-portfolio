import { motion, useInView } from 'motion/react'
import React, { useRef } from 'react'
import WorkBox from '../components/WorkBox'

const Works = () => {

  const works = [
    {
      id: 1,
      name: "Noblemind",
      category: "Health | Technology"
    },
    {
      id: 2,
      name: "Yamada Lab",
      category: "Celullar Biology"
    },
    {
      id: 3,
      name: "Tian Lab",
      category: "Celullar Biology"
    }
  ]

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
        className='lg:text-[4rem] text-[2rem] font-semibold tracking-tighter flex lg:flex-row flex-col lg:gap-4'>
          {["PROFESSIONAL", "HISTORY"].map((w, i) => (
            <motion.p 
            variants={wordVariants}
            key={i}>
              {w}
            </motion.p>
          ))}
        </motion.h2>
        <h3 className='mb-10 lg:text-[3rem] text-[1rem] mt-5'>A selection of my work.</h3>
        <div className='lg:grid grid-cols-12 gap-12 flex flex-col'>
          {works.map(({id, name, category}) => (
            <WorkBox id={id} name={name} category={category}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
