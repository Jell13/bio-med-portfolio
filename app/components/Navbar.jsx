"use client"
import React, { useEffect, useState } from 'react'

const NavbarFixed = () => {
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
    <div className='absolute w-full py-8 px-8 font-biryani'>
        <div className='grid lg:grid-cols-8 grid-cols-6 items-center'>
            <h1 className='font-semibold text-4xl col-start-1'>J.S</h1>
            <div className='md:flex gap-8 flex-col md:flex-row col-start-5 lg:col-start-4 '>
                {navigation.map(nav => (
                    <a href={nav.path} className='relative group' key={nav.id}>
                        <h4 className={`font-medium lg:text-lg text-md`}>{nav.name}</h4>
                        <span className={`border-b-2 absolute bottom-0 left-0 inline-block h-[2px] border-black w-0 group-hover:w-full duration-300`}>&nbsp;</span>
                    </a>
                ))}
            </div>
            <div className='col-start-8'>
                <div className='relative hidden group lg:inline-block'>
                    <button className='font-medium text-xl'>Email me</button>
                    <span className={`border-b-[1px] absolute bottom-0 left-0 border-black w-full group-hover:w-0 duration-300`}>&nbsp;</span>
                </div>
            </div>
        </div>
    </div>
  )
}

const NavbarScroll = () => {
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
        <div className='fixed top-0 right-0'>
            Navbar Scrolled
        </div>
    )
}
const Navbar = () => {

    const[scrolling, setScrolling] = useState(false)
    
      const handleScroll = () => {
        if(window.scrollY >= window.innerHeight){
          setScrolling(true)
          // console.log("scroll navbar")
        }
        else{
          setScrolling(false)
          // console.log("fixed navbar")
        }
      }
    
      useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
          window.removeEventListener("scroll", handleScroll)
        }
      },[])

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
        <nav>
            {scrolling ? <NavbarScroll/> : <NavbarFixed/>}
        </nav>
    )
}

export default Navbar
