import React from 'react'
import { motion } from 'motion/react'

const Loader = ({setLoading}) => {

    const container = {
        show: {
          transition: {
            staggerChildren: 0.35,
          },
        },
    };
    const item = {
        hidden: { opacity: 0, x: 200 },
        show: {
          opacity: 1,
          x: 0,
          transition: {
            ease: [0.17, 0.67, 0.83, 0.67],
            duration: 1.6,
          },
        },
        exit: {
          opacity: 0,
          y: -200,
          transition: {
            ease: "easeInOut",
            duration: 0.8,
          },
        },
    };
  return (
    <motion.div className='w-full h-screen bg-[#B8DFF0] flex justify-center items-center'>
      <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
      className='flex'>
        {[0, 1, 2].map(index => ( <motion.div key={index} className='w-10 h-10 bg-[#B7B9F4] rounded-full m-2' variants={item} /> ))}
      </motion.div>
    </motion.div>
  )
}

export default Loader
