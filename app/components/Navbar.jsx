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
            path: "/",
            name: "Home"
        },
        {
            id: 2,
            path: "/about",
            name: "About"
        },
        {
            id: 3,
            path: "/experiences",
            name: "Experiences"  
        },
        {
            id: 4,
            path: "/projects",
            name: "Projects"
        }
    ]
  return (
    <div className='h-32 w-full md:px-32 px-12 py-4'>
        <div className='h-full w-full flex items-center justify-between'>
            <h1 className='font-bold text-4xl'>JULIA SUTEDJO</h1>
            <div className='md:flex gap-8 hidden'>
                {navigation.map(nav => (
                    <Link href={nav.path} className='relative group' key={nav.id}>
                        <h4 className={`${route === nav.path ? "font-semibold" : ""}`}>{nav.name}</h4>
                        <span className={`border-b-2 absolute bottom-0 left-0 inline-block h-[2px] border-black group-hover:w-full duration-300 ${route === nav.path ? "w-full" : "w-0"}`}>&nbsp;</span>
                    </Link>
                ))}
            </div>
            {/* mobile nav */}
            <div className='md:hidden'>
                <MobileNav/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
