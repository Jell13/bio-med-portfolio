'use client'

import { useMotionValue, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const WorkBox = ({id, category, name}) => {
    
    const[hovered, setHovered] = useState()

    const mousePosition = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const mouseHandler = (e) => {
        mousePosition.x.set(e.clientX + window.scrollX)
        mousePosition.y.set(e.clientY + window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("mousemove", mouseHandler)
        return () => window.removeEventListener("mousemove", mouseHandler)
    })

  return (
    <div className='col-span-12'>
        <motion.div
        className="absolute left-6 top-4 bg-gray-800 text-white p-2 rounded-xl pointer-events-none"
        style={{x: mousePosition.x, y: mousePosition.y}}
        initial={false}
        animate={{scale: hovered ? 1 : 0}}
        >
            View
        </motion.div>
        <div key={id} className='py-20 bg-slate-100 rounded-3xl flex flex-col gap-4'>
            <motion.a 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className='flex justify-center items-center'>
                <img className='' src="./home.png" alt="" />
            </motion.a>
            <div className='flex flex-col px-8'>
                <h4 className='text-gray-600 lg:text-2xl text-lg'>{category}</h4>
                <h3 className='lg:text-[2.5rem] text-[1.5rem]'>{name}</h3>
            </div>
        </div>
    </div>
  )
}

export default WorkBox
