import { motion, useInView } from 'motion/react'
import React, { useRef } from 'react'

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
            <div key={id} className='col-span-12 py-20 border-[1px] border-red-300 flex flex-col gap-4'>
              <div className='flex justify-center items-center'>
                <img className='' src="./home.png" alt="" />
              </div>
              <div className='flex flex-col px-8'>
                <h4 className='text-gray-600 lg:text-2xl text-lg'>{category}</h4>
                <h3 className='lg:text-[2.5rem] text-[1.5rem]'>{name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
