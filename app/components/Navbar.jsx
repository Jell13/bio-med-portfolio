"use client"
import React, { useEffect, useState } from 'react'
import { easeIn, motion, useAnimation } from "motion/react"
import BackgroundChanger from './BackgroundChanger'

const NavbarFixed = () => {
    const navigation = [
        {
            id: 1,
            path: "#about",
            name: "About"
        },
        {
            id: 2,
            path: "#works",
            name: "Works"  
        },
        {
            id: 3,
            path: "#projects",
            name: "Projects"
        }
    ]
  return (
    <motion.nav 
    initial={{y: -100}}
    animate={{y: 0}}
    transition={{duration: 0.5}}
    className='absolute w-full py-8 px-8 font-biryani'>
        <div className='grid lg:grid-cols-8 grid-cols-6 items-center'>
            <motion.h1 className='font-semibold text-4xl col-start-1 cursor-pointer'><motion.p whileHover={{rotateX:45}}>J.S</motion.p></motion.h1>
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
    </motion.nav>
  )
}

const NavbarScroll = () => {

    const [active, setActive] = useState();
    const colors = ['bg-[#B8DFF0]', 'bg-[#B7B9F4]'];
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
    const [currentColor, setCurrentColor] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentColor((prevColor) => (prevColor + 1) % colors.length);
        }, 5000); // Change color every 5 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        controls.start({ transition: { duration: 1 } });
    }, [currentColor, controls]);
    return (
        <motion.button 
        initial={{scale: 0}}
        animate={{scale: 1}}
        whileHover={{
            scale: 0.8,
            transition: {duration: 0.3}
        }}
        exit={{scale: 0}}
        onClick={() => setActive(!active)}
        className={`${colors[currentColor]} text-newBlack text-xl z-40 fixed flex flex-col justify-center items-center right-7 top-7 rounded-full size-16 h-16 w-16 hover:scale-90  transition-colors duration-1000 ease-in-out`}>
            <span className={`w-7 h-[2px] bg-newBlack absolute rounded-full ${active ? "translate-y-0 rotate-45": "-translate-y-1 rotate-0"} duration-300`}></span>
            <span className={`w-7 h-[2px] bg-newBlack absolute rounded-full ${active ? "translate-y-0 -rotate-45": "translate-y-1 rotate-0"} duration-300`}></span>
        </motion.button>
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
