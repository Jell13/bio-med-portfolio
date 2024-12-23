import BackgroundChanger from '@/app/components/BackgroundChanger'
import React from 'react'
import Navbar from '../components/Navbar'

const Hero = () => {
  return (
    <BackgroundChanger>
      <Navbar/>
      <header className='h-[calc(100vh-80px)] py-20 px-20'>
        <div className='w-full h-full flex justify- items-center'>
          <div className='flex flex-col'>
            <h1 className='text-[5rem] font-semibold leading-tight tracking-tighter'>JULIA SUTEDJO <br/>BIOMEDICAL ENGINEER</h1>
          </div>
        </div>
      </header>
    </BackgroundChanger>
  )
}

export default Hero
