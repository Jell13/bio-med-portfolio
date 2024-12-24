import React, { useEffect } from 'react'

const About = () => {
  return (
    <section id='about' className='lg:px-20 px-8 py-20'>
      <div className='flex flex-col justify-center mt-5'>
        <h2 className='lg:text-[4rem] text-[2rem] font-semibold tracking-tighter'>WHO AM I /</h2>
        <div className='lg:grid grid-cols-12 mt-20 flex flex-col'>
          <h3 className='text-lg font-biryani lg:col-start-6 col-start-1'>(About)</h3>
          <p className='text-xl font-biryani lg:col-start-8 col-end-12'>You're quote goes here</p>
        </div>
        <div className='font-biryani mt-10 flex flex-col'>
          <div className='mt-12'>
            <p className='text-[1.2rem] lg:text-[2rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatibus rerum ex porro accusamus modi dolorem, reprehenderit minus maxime? Ipsum reiciendis rerum suscipit inventore doloribus deleniti fugiat pariatur quaerat soluta.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
