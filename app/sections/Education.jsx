import React from 'react'
import Marquee from '../components/Marquee'

const Education = () => {
  return (
    <section className='flex flex-col gap-8 px-10'>
      <hr />
        <div className='overflow-x-hidden'>
            <Marquee/>
        </div>
      <hr />
    </section>
  )
}

export default Education
