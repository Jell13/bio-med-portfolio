"use client"
import Hero from "./sections/Hero";
import { ReactLenis } from 'lenis/dist/lenis-react'
import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Education from "./sections/Education";
import Experiences from "./sections/Experiences";
import BackgroundChanger from "./components/BackgroundChanger";
import Loader from "./components/Loader";
import { AnimatePresence } from "framer-motion";

export default function Home() {

  const[loading, setLoading] = useState(true)
  return (
    <>
      <AnimatePresence>
        {loading ? 
        <>
          <div>
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
            <Experiences/>
          </ReactLenis>
        </>}
      </AnimatePresence>
    </>
  );
}
