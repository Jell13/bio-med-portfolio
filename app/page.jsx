"use client"
import Hero from "./sections/Hero";
import { ReactLenis } from 'lenis/dist/lenis-react'
import { useState } from "react";
import Loader from "./sections/Loader";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Education from "./sections/Education";
import Experiences from "./sections/Experiences";
import BackgroundChanger from "./components/BackgroundChanger";

export default function Home() {

  const[loading, setLoading] = useState()
  return (
    <>
      {loading ? 
      <>
        <div>
          <Loader/>
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
    </>
  );
}
