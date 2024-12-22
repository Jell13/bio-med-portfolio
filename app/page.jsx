import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import { ReactLenis } from 'lenis/dist/lenis-react'

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <Hero/>
      </ReactLenis>
    </>
  );
}
