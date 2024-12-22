"use client"
import Hero from "./sections/Hero";
import { ReactLenis } from 'lenis/dist/lenis-react'
import { useState } from "react";
import Loader from "./sections/Loader";
import Navbar from "./components/Navbar";

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
          <Hero/>
        </ReactLenis>
      </>}
    </>
  );
}
