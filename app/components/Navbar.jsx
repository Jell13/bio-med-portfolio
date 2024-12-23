"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import MobileNav from './MobileNav'

const Navbar = () => {
    const route = usePathname()
    console.log(route)
    const navigation = [
        {
            id: 1,
            path: "#about",
            name: "About"
        },
        {
            id: 2,
            path: "#experiences",
            name: "Experiences"  
        },
        {
            id: 3,
            path: "#projects",
            name: "Projects"
        }
    ]
  return (
    <div className='h-20 w-full py-8 px-8 font-biryani'>
        <div className='grid grid-cols-8 items-center'>
            <h1 className='font-semibold text-4xl col-start-1'>J.S</h1>
            <div className='md:flex gap-8 hidden col-start-4'>
                {navigation.map(nav => (
                    <a href={nav.path} className='relative group' key={nav.id}>
                        <h4 className={`font-medium text-lg`}>{nav.name}</h4>
                        <span className={`border-b-2 absolute bottom-0 left-0 inline-block h-[2px] border-black w-0 group-hover:w-full duration-300`}>&nbsp;</span>
                    </a>
                ))}
            </div>
            <div className='col-start-8'>
                <div className='relative group inline-block'>
                    <button className='font-medium text-xl'>Email me</button>
                    <span className={`border-b-[1px] absolute bottom-0 left-0 border-black w-full group-hover:w-0 duration-300`}>&nbsp;</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
