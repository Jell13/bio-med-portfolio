import React, { useEffect } from 'react'

const About = () => {
  return (
    <section id='about' className='px-20 py-20'>
      <div className='flex flex-col justify-center mt-10'>
        <h2 className='text-[4rem] font-semibold tracking-tighter'>WHO AM I /</h2>
        <div className='grid grid-cols-12 mt-20'>
          <h3 className='text-lg font-biryani col-start-6'>(About)</h3>
          <p className='text-xl font-biryani col-start-8 col-end-12'>You're quote goes here</p>
        </div>
        <div className='font-biryani mt-10 flex flex-col'>
          <div className='px-10 mt-12'>
            <p className='text-[2rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatibus rerum ex porro accusamus modi dolorem, reprehenderit minus maxime? Ipsum reiciendis rerum suscipit inventore doloribus deleniti fugiat pariatur quaerat soluta.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
