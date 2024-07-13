"use client"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"

const page = () => {
  return (
    <div className='w-full h-full md:px-32 px-12'>
      <div className='h-full flex flex-col mt-10 pb-10'>
        <h1 className='text-3xl font-medium'>Experiences</h1>
        <div className='flex justify-center items-center flex-col'>
            {/* <div className='mt-8'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit iusto fuga veniam nostrum corrupti, deserunt expedita ratione, dicta illo consectetur reiciendis ipsum deleniti alias minus quos porro amet saepe. Sint.</p>
            </div> */}
            
        </div>
      </div>
    </div>
  )
}

export default page
