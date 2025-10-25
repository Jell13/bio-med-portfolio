"use client";
import Hero from "./sections/Hero";
import { ReactLenis, useLenis } from "lenis/react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Loader from "./components/Loader";
import Projects from "./sections/Projects";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./sections/Footer";

export default function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <AnimatePresence mode="wait">
            {loading ? (
                <Loader setLoading={setLoading} />
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <ReactLenis root>
                        <Navbar />
                        <Hero />
                        <About />
                        <Projects />
                        {/* <Contact /> */}
                        <Footer />
                    </ReactLenis>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
