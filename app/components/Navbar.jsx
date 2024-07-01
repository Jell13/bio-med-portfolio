"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

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
    <div className='h-32 w-full md:px-32 py-4'>
        <div className='h-full w-full flex items-center justify-between'>
            <h1 className='font-bold text-4xl'>JULIA SUTEDJO</h1>
            <ul className='flex gap-8'>
                {navigation.map(nav => (
                    <Link href={nav.path} className='relative group' key={nav.id}>
                        <h4 className={`${route === nav.path ? "font-semibold" : ""}`}>{nav.name}</h4>
                        <span className={`border-b-2 absolute bottom-0 left-0 inline-block h-[2px] border-black group-hover:w-full duration-300 ${route === nav.path ? "w-full" : "w-0"}`}>&nbsp;</span>
                    </Link>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar
