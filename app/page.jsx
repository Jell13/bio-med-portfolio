"use client"
import Hero from "./sections/Hero";
import { ReactLenis, useLenis } from 'lenis/react'
import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Education from "./sections/Education";
import Works from "./sections/Works";
import BackgroundChanger from "./components/BackgroundChanger";
import Loader from "./components/Loader";
import { AnimatePresence } from "framer-motion";
import Projects from "./sections/Projects";


export default function Home() {

  const[loading, setLoading] = useState(true)
  return (
    <>
      <AnimatePresence>
        {loading ? 
        <>
          <div className="bg-[#B8DFF0]">
            <Loader setLoading={setLoading}/>
          </div>
        </> 
        : 
        <>
          <ReactLenis root>
            <BackgroundChanger>
              <Navbar/>
              <Hero/>
            </BackgroundChanger>
            <About/>
            <Education/>
            <Works/>
            <Projects/>
          </ReactLenis>
        </>}
      </AnimatePresence>
    </>
  );
}
