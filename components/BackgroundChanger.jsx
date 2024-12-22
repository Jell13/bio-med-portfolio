"use client"
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const colors = ['bg-[#B8DFF0]', 'bg-[#B7B9F4]'];

const BackgroundChanger = ({ children }) => {
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
    <motion.div
      className={`${colors[currentColor]} transition-colors duration-1000 ease-in-out`}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default BackgroundChanger;
