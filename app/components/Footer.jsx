"use client"

import React from 'react'

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()

  return (
    <div className='w-full h-full md:mx-32 mt-32'>
      {year}
    </div>
  )
}

export default Footer
