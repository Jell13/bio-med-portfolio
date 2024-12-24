import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
    const imgs = [
        {
            id: 1,
            link: "/berk-logo.png",
        },
        {
            id: 2,
            link: "/davis-logo.webp",
        }
    ]
  return (
    <div className='flex'>
        <motion.div initial={{x: 0}} animate={{x: "-100%"}} transition={{duration: 20, ease: 'linear', repeat: Infinity}} className='flex flex-shrink-0 justify-center items-center'>
            {imgs.map(({id, link, sizeX, sizeY}) => (
                <img key={id} src={link} className='pr-20'/>
            ))}
        </motion.div>
        <motion.div initial={{x: 0}} animate={{x: "-100%"}} transition={{duration: 20, ease: 'linear', repeat: Infinity}} className='flex flex-shrink-0 justify-center items-center'>
            {imgs.map(({id, link, sizeX, sizeY}) => (
                <img key={id} src={link} className='pr-20'/>
            ))}
        </motion.div>
    </div>
  )
}

export default Marquee
