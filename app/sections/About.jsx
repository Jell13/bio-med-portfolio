"use client"

import React, { useEffect, useRef } from 'react'
import { LuArrowDownRight } from "react-icons/lu"
import { motion, useInView } from 'motion/react'
import Image from 'next/image';

// const About = () => {

//   const aboutRef = useRef()

//   const isInView = useInView(aboutRef, {margin: "-100px"})

//   const wordVariants = {
//     hidden: {y: 50,opacity: 0},
//     visible: {y: 0, opacity: 1}
//   }

//   const staggerChildren = {
//     visible: {
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   }

//   return (
//     <section id='about' className='lg:px-20 px-8 py-20'>
//       <div className='flex flex-col justify-center mt-5'>
//         <div className='grid grid-cols-12'>
//           <LuArrowDownRight className='hidden lg:flex' size={100}/>
//           <motion.h2 
//           ref={aboutRef} 
//           variants={staggerChildren}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className='lg:text-[4rem] lg:col-span-7 lg:col-start-6 col-span-12 text-[2rem] font-semibold tracking-tighter flex gap-4'>
//             {["WHO","AM","I","/"].map((w, i) => (
//               <motion.p 
//               variants={wordVariants}
//               key={i}>
//                 {w}
//               </motion.p>
//             ))}
//           </motion.h2>
//         </div>
//         <div className='lg:grid grid-cols-12 mt-20'>
//           <div className='lg:col-span-4 col-span-12'>
//             <img src="./myhero.png" alt="" />
//           </div>
//           <div className='lg:col-span-7 lg:col-start-6 col-span-12'>
//             <div className='flex flex-col gap-y-10'>
//               <h6 className='text-xl'>Quote goes here</h6>
//               <div className='flex flex-col'>
//                 <span className='text-lg flex h-fit text-gray-500 font-medium tracking-tighter'>(ABOUT ME)</span>
//                 <p className='flex w-full max-w-[48ch] text-[1.5rem] text-balance text-gray-500'>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus repellat voluptas possimus! Quae adipisci maxime aperiam harum modi, nihil fugit quasi perspiciatis nemo sit dolorum? Magnam sint nobis earum. Impedit!
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

const About = () => {
  const aboutRef = useRef();
  const isInView = useInView(aboutRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6 font-dmsans lg:px-20 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-[#214970]/10 rounded-full" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#E8A87C]/5 rounded-lg rotate-12" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-[2px] bg-[#E8A87C]" />
            <h2 className="text-sm tracking-widest text-[#E8A87C] uppercase font-albert font-semibold">
              About
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 font-dmsans">
            <div className='flex justify-center items-center'>
              <div className='relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden'>
                <Image 
                  src="/Julia-hero.webp" 
                  alt="Julia Sutedjo - Bioengineering professional" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className='object-cover rounded-2xl'
                  priority
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight font-albert text-[#214970]">
                Engineering solutions for better healthcare
              </h3>
              <p className="text-gray-700 leading-relaxed">
                As a bioengineer, I specialize in developing innovative solutions that bridge the gap between engineering principles and medical applications. My work focuses on creating technologies that improve patient outcomes and advance healthcare delivery.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With expertise in biomaterials, medical device design, and tissue engineering, I'm passionate about translating research into practical applications that make a real-world impact.
              </p>

              <div className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-[#E8A87C]" />
                  <h4 className="text-sm tracking-widest text-[#E8A87C] uppercase font-semibold font-albert">
                    Expertise
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Biomaterials', 'Tissue Engineering', 'Medical Devices', 'Research & Development', 'Data Analysis', 'Project Management'].map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(33, 73, 112, 0.1)' }}
                      className="px-4 py-2 bg-[#214970]/5 border border-[#214970]/20 rounded-full text-sm text-[#214970] font-light font-dmsans cursor-default transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About
