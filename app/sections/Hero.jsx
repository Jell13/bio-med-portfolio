import BackgroundChanger from '@/app/components/BackgroundChanger'
import React from 'react'
import Navbar from '../components/Navbar'

const Hero = () => {
  return (
    <BackgroundChanger>
      <Navbar/>
      <div className='h-[calc(100vh-80px)] w-screen'>
        
      </div>
    </BackgroundChanger>
  )
}

export default Hero
