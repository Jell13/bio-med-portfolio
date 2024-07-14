"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full md:px-32 px-12'>
      <div className='w-full h-full flex flex-col justify-center mt-10'>
        <h1 className='text-3xl font-medium'>Projects</h1>
        <motion.div initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay:2
          }} className='w-full h-full flex justify-center items-center mt-10'>
          <Carousel className="md:w-[600px] w-[250px]">
            <CarouselContent>
              <CarouselItem>
                <Link href={"projects/project1"}>
                  <div className='md:w-[600px] w-[250px] h-[300px] rounded-xl flex flex-col justify-center items-center bg-gray-300 p-4'>
                    <h3 className='mb-10'>Project 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iste minima architecto recusandae ullam ea? Error dolor, fugiat debitis quae aperiam placeat consequuntur laboriosam perspiciatis optio laborum vel ex doloribus!</p>
                  </div>
                </Link>
              </CarouselItem>
              <CarouselItem>
                <Link href={"projects/project2"}>
                  <div className='md:w-[600px] w-[250px] h-[300px] rounded-xl bg-gray-300 p-2'>
                    Project 2
                  </div>
                </Link>
              </CarouselItem>
              <CarouselItem>
                <Link href={"projects/project3"}>
                  <div className='md:w-[600px] w-[250px] h-[300px] rounded-xl bg-gray-300 p-2'>
                    Project 3
                  </div>
                </Link>
              </CarouselItem>
              <CarouselItem>
                <Link href={"projects/project3"}>
                  <div className='md:w-[600px] w-[250px] h-[300px] rounded-xl bg-gray-300 p-2'>
                    Project 4
                  </div>
                </Link>
              </CarouselItem>
              <CarouselItem>
                <Link href={"projects/project3"}>
                  <div className='md:w-[600px] w-[250px] h-[300px] rounded-xl bg-gray-300 p-2'>
                    Project 5
                  </div>
                </Link>
              </CarouselItem>
              <CarouselItem>
                <Link href={"projects/project3"}>
                  <div className='md:w-[600px] w-[250px] h-[300px] rounded-xl bg-gray-300 p-2'>
                    Project 6
                  </div>
                </Link>
              </CarouselItem>
              <CarouselItem>
                <Link href={"projects/project3"}>
                  <div className='md:w-[600px] w-[250px] h-[300px] rounded-xl bg-gray-300 p-2'>
                    Project 7
                  </div>
                </Link>
              </CarouselItem>
              <CarouselItem>
                <Link href={"projects/project3"}>
                  <div className='md:w-[600px] w-[250px] h-[300px] rounded-xl bg-gray-300 p-2'>
                    Project 8
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
