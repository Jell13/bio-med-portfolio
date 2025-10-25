"use client"

import React, { useRef } from 'react'
import ProjectBox from '../components/ProjectBox'
import { motion, useInView } from 'motion/react'
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projectsRef = useRef();
  const isInView = useInView(projectsRef, { once: true, margin: "-100px" });

  const projects = [
    {
      id: "01",
      title: "Magnetic Actuator for Pressure regulation",
      category: "Research & Development",
      description: "Engineered a precision-aligned magnetic actuator system using iterative 3D-printed designs and a custom ball-joint mechanism, improving magnetic field centering for more reliable droplet manipulation experiments.",
      tags: ["Biomechanics", "Prototyping", "Mechanical Design", "Research Instrumentation"],
      image: "/actuator.gif",
      link: "/projects/actuator"
    },
    // {
    //   id: "02",
    //   title: "Wearable Health Monitoring System",
    //   category: "Medical Devices",
    //   description: "Developed a non-invasive wearable sensor for continuous monitoring of vital signs, with integrated data analytics for early detection of health anomalies.",
    //   tags: ["IoT", "Sensors", "Data Analytics"],
    //   image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    //   link: "/projects/wearable-monitoring" // Replace with your actual project page URL
    // },
    // {
    //   id: "03",
    //   title: "Drug Delivery Microdevice",
    //   category: "Research & Development",
    //   description: "Engineered a microfluidic device for targeted drug delivery, improving therapeutic efficacy while minimizing side effects through controlled release mechanisms.",
    //   tags: ["Microfluidics", "Drug Delivery", "Prototyping"],
    //   image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop",
    //   link: "/projects/drug-delivery" // Replace with your actual project page URL
    // },
    // {
    //   id: "04",
    //   title: "Biomechanical Analysis Platform",
    //   category: "Data Analysis",
    //   description: "Created a comprehensive analysis platform for studying human movement patterns, assisting in rehabilitation protocol development and injury prevention.",
    //   tags: ["Biomechanics", "Motion Capture", "Machine Learning"],
    //   image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop",
    //   link: "/projects/biomechanical-analysis" // Replace with your actual project page URL
    // }
  ];

  return (
    <section id="projects" className="relative py-32 px-6 lg:px-20 bg-white overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(33,73,112,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(33,73,112,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={projectsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="w-16 h-[1px] bg-[#E8A87C]"
                initial={{ width: 0 }}
                animate={isInView ? { width: 64 } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <h2 className="text-xs tracking-[0.3em] text-[#E8A87C] uppercase font-albert font-semibold">
                Selected Work
              </h2>
            </div>
            <div className="flex items-end justify-between">
              <h3 className="text-5xl lg:text-6xl font-bold font-albert text-[#214970] leading-tight">
                Featured<br />Projects
              </h3>
              {/* <motion.div 
                className="hidden lg:block text-sm text-gray-500 font-light"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 }}
              >
                {projects.length} Projects
              </motion.div> */}
            </div>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group block"
              >
                <div className="relative bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-700 hover:border-[#E8A87C]/30">
                  <div className="grid lg:grid-cols-12 gap-0">
                    {/* Project Number & Category */}
                    <div className="lg:col-span-2 p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-100">
                      <div>
                        <motion.span 
                          className="text-5xl font-bold text-[#214970]/10 group-hover:text-[#E8A87C]/30 transition-colors duration-500 font-albert"
                        >
                          {project.id}
                        </motion.span>
                        <div className="mt-4">
                          <span className="inline-block px-3 py-1 bg-[#214970]/5 text-[#214970] rounded-full text-xs font-medium font-dmsans tracking-wide">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Project Image */}
                    <div className="lg:col-span-4 relative h-64 lg:h-80 overflow-hidden bg-gray-50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#214970]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Project Content */}
                    <div className="lg:col-span-6 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-2xl lg:text-3xl font-semibold font-albert text-[#214970] group-hover:text-[#E8A87C] transition-colors duration-300 leading-tight pr-4">
                            {project.title}
                          </h4>
                          <motion.div
                            className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#214970]/20 group-hover:border-[#E8A87C] flex items-center justify-center transition-all duration-300"
                            whileHover={{ scale: 1.1, rotate: 45 }}
                          >
                            <ArrowRight size={18} className="text-[#214970] group-hover:text-[#E8A87C] transition-colors" />
                          </motion.div>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm font-dmsans font-light mb-6">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: index * 0.15 + tagIndex * 0.05 }}
                            className="px-3 py-1 bg-transparent border border-[#214970]/20 text-[#214970] font-albert rounded-full text-xs font-light group-hover:border-[#E8A87C]/50 group-hover:bg-[#E8A87C]/5 transition-all duration-300"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Line Effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E8A87C]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </div>
              </motion.a>
            ))}
          </div>

          {/* View All Projects Link */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <a
              href="/projects"
              className="group inline-flex items-center gap-3 text-[#214970] hover:text-[#E8A87C] transition-colors duration-300"
            >
              <span className="text-sm tracking-widest uppercase font-semibold">View All Projects</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
              <div className="w-12 h-[1px] bg-[#214970] group-hover:bg-[#E8A87C] group-hover:w-16 transition-all duration-300" />
            </a>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};


export default Projects
