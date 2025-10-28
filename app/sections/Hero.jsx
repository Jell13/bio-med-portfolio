// "use client"

// import React, { useEffect, useRef, useState } from 'react'
// import { motion, useInView, useScroll } from 'motion/react'
// import { ArrowRight } from 'lucide-react';
// import BackgroundOrbs from '../components/BackgroundOrbs';
// import FloatingParticles from '../components/FloatingParticles';

// // const Hero = () => {

// //     const heroRef = useRef()

// //     const isInView = useInView(heroRef, {margin: "-100px"})

// //     const wordVariants = {
// //       hidden: {y: 50, opacity: 0},
// //       visible: {y: 0, opacity: 1}
// //     }
  
// //     const staggerChildren = {
// //       visible: {
// //         transition: {
// //           staggerChildren: 0.2
// //         }
// //       }
// //     }
// //   return (
// //     <motion.header 
// //     id='home'
// //     className='h-screen py-20 lg:px-20 px-8'>
// //       <div className='w-full h-full flex justify- items-center'>
// //         <div className='flex flex-col gap-6'>
// //           <motion.h1 
// //           ref={heroRef} 
// //           variants={staggerChildren} 
// //           initial="hidden"
// //           animate={isInView ? "visible" : "hidden"}
// //           className='lg:text-[5rem] text-[3rem] font-semibold leading-tight tracking-tighter'>
// //             {["JULIA SUTEDJO", "BIOMEDICAL ENGINEER"].map((w, index) => (
// //               <motion.p
// //               key={index}
// //               variants={wordVariants}
// //               >{w}</motion.p>
// //             ))}
// //           </motion.h1>
// //           <div className='relative lg:hidden group inline-block'>
// //             <button className='font-medium lg:text-[1.5rem] border rounded-lg px-2 active:bg-black active:text-white duration-200 border-black'>Email me</button>
// //           </div>
// //         </div>
// //       </div>
// //     </motion.header>
// //   )
// // }

// const Hero = () => {
//   const heroRef = useRef();
//   const isInView = useInView(heroRef, { margin: "-100px", once: true });

//   const wordVariants = {
//     hidden: { y: 80, opacity: 0 },
//     visible: { y: 0, opacity: 1 }
//   };

//   const staggerChildren = {
//     visible: {
//       transition: {
//         staggerChildren: 0.15
//       }
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 pt-20 bg-[#214970] overflow-hidden"
//     >
//       {/* Animated Background Elements */}
//       <BackgroundOrbs />
//       <FloatingParticles />
      
//       {/* Geometric Decorations */}
//       <div className="absolute top-40 left-10 w-20 h-20 border-2 border-white/10 rounded-lg rotate-12" />
//       <div className="absolute bottom-40 right-20 w-16 h-16 border-2 border-[#E8A87C]/30 rounded-full" />
//       <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-white/10 rotate-45" />
      
//       {/* Grid Pattern Overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

//       <div className="max-w-7xl mx-auto w-full relative z-10">
//         <motion.div
//           ref={heroRef}
//           variants={staggerChildren}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="space-y-8"
//         >
//           <motion.div variants={wordVariants} className="flex items-center gap-3">
//             <motion.div
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="w-2 h-2 bg-[#E8A87C] rounded-full"
//             />
//             <p className="text-sm tracking-widest text-[#E8A87C] font-albert uppercase font-semibold">
//               Bio Engineer
//             </p>
//             <div className="h-[1px] w-12 bg-[#E8A87C]/50" />
//           </motion.div>

//           <div className="space-y-6">
//             <motion.h1
//               variants={wordVariants}
//               className="text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight font-albert leading-none text-white relative"
//               // style={{ fontFamily: 'Georgia, serif' }}
//             >
//               <span className="relative inline-block">
//                 Julia Sutedjo
//                 <motion.span
//                   className="absolute -bottom-2 left-0 h-1 bg-[#E8A87C]"
//                   initial={{ width: 0 }}
//                   animate={isInView ? { width: '40%' } : { width: 0 }}
//                   transition={{ duration: 0.8, delay: 0.5 }}
//                 />
//               </span>
//             </motion.h1>
            
//             <motion.div
//               variants={wordVariants}
//               className="relative"
//             >
//               <p className="text-xl lg:text-2xl text-white/80 max-w-2xl font-light font-dmsans leading-relaxed">
//                 Advancing biological~ innovation through{' '}
//                 <span className="text-[#E8A87C] font-medium">engineering excellence</span>{' '}
//                 and scientific research
//               </p>
              
//               {/* Decorative Quote Mark */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0 }}
//                 transition={{ delay: 0.8 }}
//                 className="absolute -left-8 -top-4 text-8xl text-white/10 font-serif"
//               >
//                 "
//               </motion.div>
//             </motion.div>
//           </div>

//           <motion.div variants={wordVariants} className="flex flex-wrap gap-4 pt-4 font-dmsans">
//             <motion.a
//               href="#projects"
//               className="group relative inline-flex items-center gap-2 bg-[#E8A87C] text-[#214970] px-8 py-4 rounded-full font-medium overflow-hidden"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 View Projects
//                 <motion.span
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   <ArrowRight size={16} />
//                 </motion.span>
//               </span>
//               <motion.span
//                 className="absolute inset-0 bg-[#D4956A]"
//                 initial={{ x: '-100%' }}
//                 whileHover={{ x: 0 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.a>
            
//             <motion.a
//               href="#contact"
//               className="group relative inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-light backdrop-blur-sm"
//               whileHover={{ scale: 1.05, borderColor: 'rgba(232, 168, 124, 0.5)' }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10">Get in Touch</span>
//               <motion.span
//                 className="absolute inset-0 bg-white/10 rounded-full"
//                 initial={{ scale: 0, opacity: 0 }}
//                 whileHover={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.a>
//           </motion.div>

//           {/* Scroll Indicator */}
//           {/* <motion.div
//             variants={wordVariants}
//             className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
//           >
//             <span className="text-xs text-white/50 tracking-widest">SCROLL</span>
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//               className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"
//             />
//           </motion.div> */}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero

"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { ArrowRight } from 'lucide-react';
import BackgroundOrbs from '../components/BackgroundOrbs';
import FloatingParticles from '../components/FloatingParticles';

const Hero = () => {
  const heroRef = useRef();
  const isInView = useInView(heroRef, { margin: "-100px", once: true });
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const wordVariants = {
    hidden: { y: prefersReducedMotion ? 0 : 80, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 pt-20 bg-[#214970] overflow-hidden"
    >
      {/* Animated Background Elements - Disabled on mobile for performance */}
      {!isMobile && (
        <>
          <BackgroundOrbs />
          <FloatingParticles />
        </>
      )}
      
      {/* Simplified mobile background */}
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#214970] via-[#2a5a87] to-[#214970] opacity-50" />
      )}
      
      {/* Geometric Decorations - Reduced on mobile */}
      <div className="absolute top-40 left-10 w-20 h-20 border-2 border-white/10 rounded-lg rotate-12" />
      {!isMobile && (
        <>
          <div className="absolute bottom-40 right-20 w-16 h-16 border-2 border-[#E8A87C]/30 rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-white/10 rotate-45" />
        </>
      )}
      
      {/* Grid Pattern Overlay - Simplified on mobile */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          ref={heroRef}
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.div variants={wordVariants} className="flex items-center gap-3">
            <motion.div
              animate={!isMobile && !prefersReducedMotion ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-[#E8A87C] rounded-full"
            />
            <p className="text-sm tracking-widest text-[#E8A87C] font-albert uppercase font-semibold">
              Bioengineer
            </p>
            <div className="h-[1px] w-12 bg-[#E8A87C]/50" />
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              variants={wordVariants}
              className="text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight font-albert leading-none text-white relative"
            >
              <span className="relative inline-block">
                Julia Sutedjo
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-[#E8A87C]"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '40%' } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </motion.h1>
            
            <motion.div
              variants={wordVariants}
              className="relative"
            >
              <p className="text-xl lg:text-2xl text-white/80 max-w-2xl font-light font-dmsans leading-relaxed">
                Advancing biological innovation through{' '}
                <span className="text-[#E8A87C] font-medium">engineering excellence</span>{' '}
                and scientific research
              </p>
              
              {/* Decorative Quote Mark - Hidden on mobile */}
              {!isMobile && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -left-8 -top-4 text-8xl text-white/10 font-serif"
                >
                  "
                </motion.div>
              )}
            </motion.div>
          </div>

          <motion.div variants={wordVariants} className="flex flex-wrap gap-4 pt-4 font-dmsans">
            <motion.a
              href="#projects"
              className="group relative inline-flex items-center gap-2 bg-[#E8A87C] text-[#214970] px-8 py-4 rounded-full font-medium overflow-hidden"
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <motion.span
                  animate={!isMobile && !prefersReducedMotion ? { x: [0, 5, 0] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </span>
              {!isMobile && (
                <motion.span
                  className="absolute inset-0 bg-[#D4956A]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.a>
            
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-light backdrop-blur-sm"
              whileHover={!isMobile ? { scale: 1.05, borderColor: 'rgba(232, 168, 124, 0.5)' } : {}}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get in Touch</span>
              {!isMobile && (
                <motion.span
                  className="absolute inset-0 bg-white/10 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero