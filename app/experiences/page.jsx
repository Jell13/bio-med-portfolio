"use client"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const page = () => {
  return (
    <div className='w-full h-full md:px-32 px-12'>
      <div className='h-full flex flex-col mt-20'>
        <h1 className='text-3xl font-medium'>Experiences</h1>
        <div className='flex justify-center items-center flex-col'>
            {/* <div className='mt-8'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit iusto fuga veniam nostrum corrupti, deserunt expedita ratione, dicta illo consectetur reiciendis ipsum deleniti alias minus quos porro amet saepe. Sint.</p>
            </div> */}
            <Carousel>
              <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
        </div>
      </div>
    </div>
  )
}

export default page
