import BackgroundChanger from '@/components/backgroundChanger'
import React from 'react'
import Navbar from '../components/Navbar'

const Hero = () => {
  return (
    <BackgroundChanger>
      <Navbar/>
      <div className='h-[calc(100vh-128px)]'>
        Hello world
      </div>
    </BackgroundChanger>
  )
}

export default Hero
