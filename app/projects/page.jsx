"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full md:px-32'>
      <div className='w-full h-full flex flex-col justify-center'>
        <h1 className='mt-10 text-3xl'>Projects</h1>
        <motion.div initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay:2
          }} className='w-full h-full flex justify-center items-center mt-10'>
          <Carousel className="w-[600px]">
            <CarouselContent>
              <CarouselItem>
                <Link href={"projects/project1"}>
                  <div className='w-[600px] h-[300px] rounded-xl flex justify-center items-center bg-gray-300'>
                    Project 1
                  </div>
                </Link>
              </CarouselItem>
              <CarouselItem>
                <Link href={"projects/project2"}>
                  <div className='w-[600px] h-[300px] rounded-xl bg-gray-300 p-2'>
                    Project 2
                  </div>
                </Link>
              </CarouselItem>
              <CarouselItem>
                <Link href={"projects/project3"}>
                  <div className='w-[600px] h-[300px] rounded-xl bg-gray-300 p-2'>
                    Project 3
                  </div>
                </Link>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
        
      </div>
    </div>
  )
}

export default page
