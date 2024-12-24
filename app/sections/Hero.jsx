"use client"

import React, { useEffect, useState } from 'react'

const Hero = () => {
  return (
    <header className='h-screen py-20 lg:px-20 px-8'>
      <div className='w-full h-full flex justify- items-center'>
        <div className='flex flex-col gap-6'>
          <h1 className='lg:text-[5rem] text-[3rem] font-semibold leading-tight tracking-tighter'>JULIA SUTEDJO <br/>BIOMEDICAL ENGINEER</h1>
          <div className='relative lg:hidden group inline-block'>
            <button className='font-medium lg:text-[1.5rem] border rounded-lg px-2 active:bg-black active:text-white duration-200 border-black'>Email me</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
