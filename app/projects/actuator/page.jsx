"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const page = () => {
    return (
        <section className="py-20 px-6 lg:px-20 bg-white">
            <div className="max-w-5xl mx-auto">
                {/* Back Button */}
                <motion.a
                    href="/"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="group inline-flex items-center gap-3 text-[#214970] hover:text-[#E8A87C] transition-colors mb-12"
                    whileHover={{ x: -5 }}
                >
                    <motion.div
                        className="w-10 h-10 rounded-full border-2 border-[#214970]/20 group-hover:border-[#E8A87C] flex items-center justify-center transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        <ArrowLeft size={18} />
                    </motion.div>
                    <span className="text-sm font-light tracking-wide font-albert">
                        Back to Home
                    </span>
                    <div className="w-0 h-[1px] bg-[#E8A87C] group-hover:w-8 transition-all duration-300" />
                </motion.a>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="space-y-16"
                >
                    {/* Project Overview */}
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-[1px] bg-[#E8A87C]" />
                            <h2 className="text-xs tracking-[0.3em] text-[#E8A87C] uppercase font-semibold font-albert">
                                Overview
                            </h2>
                        </div>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed text-lg font-light font-dmsans">
                                As part of a research project on magnetic
                                droplet manipulation, I designed and optimized a
                                3D-printed magnetic actuator system to create a
                                uniform and precisely positioned magnetic field.
                            </p>
                        </div>
                    </div>

                    {/* Featured Image 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-2xl overflow-hidden"
                    >
                        <div className="bg-gray-100 flex items-center justify-center p-8">
                            <img
                                src="/actuator_preview.webp"
                                alt="Magnetic Actuator System"
                                className="max-w-full max-h-[700px] object-contain rounded-xl"
                            />
                        </div>
                    </motion.div>

                    {/* Design & Optimization */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-[1px] bg-[#E8A87C]" />
                                <h3 className="text-xs tracking-[0.3em] text-[#E8A87C] uppercase font-semibold font-albert">
                                    Design Process
                                </h3>
                            </div>
                            <h4 className="text-2xl font-semibold font-albert text-[#214970] mb-4">
                                Mechanical Design & Optimization
                            </h4>
                            <p className="text-gray-700 leading-relaxed font-light font-dmsans">
                                My work focused on the mechanical design,
                                prototyping, and alignment calibration of the
                                magnet holder. Through iterative design, I
                                optimized parameters such as magnet fit,
                                spacing, and holder height to maximize magnetic
                                force without structural failure.
                            </p>
                        </div>

                        {/* Image Placeholder 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-xl overflow-hidden shadow-lg"
                        >
                            <div className="bg-gray-100 flex items-center justify-center p-8">
                                <img
                                    src="/actuator_pre.webp"
                                    alt="Magnetic Actuator System"
                                    className="max-w-full max-h-[500px] object-contain rounded-xl" // Limits size
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Problem Solving Section */}
                    <div className="bg-[#F8F9FA] rounded-2xl p-8 lg:p-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-[1px] bg-[#E8A87C]" />
                            <h3 className="text-xs tracking-[0.3em] text-[#E8A87C] uppercase font-semibold font-albert">
                                Innovation
                            </h3>
                        </div>
                        <h4 className="text-3xl font-semibold text-[#214970] mb-6 font-albert">
                            Ball-and-Joint Adjustment Mechanism
                        </h4>
                        <p className="text-gray-700 leading-relaxed font-light text-lg mb-8 font-dmsans">
                            When initial tests revealed misalignment between the
                            magnetic field and the optical axis, I developed a
                            ball-and-joint adjustment mechanism that enabled
                            controlled displacement and locking in both the x
                            and y directions. This design allowed the magnetic
                            field to be centered precisely under the sample and
                            objective, improving the system's experimental
                            accuracy.
                        </p>

                        {/* Two Column Images */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative rounded-xl overflow-hidden shadow-lg"
                            >
                                <div className="aspect-video bg-white flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <div className="w-12 h-12 mx-auto mb-2 border-2 border-[#214970]/20" />
                                        <p className="text-[#214970]/40 text-xs font-light">
                                            Adjustment Mechanism Close-up
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="relative rounded-xl overflow-hidden shadow-lg"
                            >
                                <div className="aspect-video bg-white flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <div className="w-12 h-12 mx-auto mb-2 border-2 border-[#E8A87C]/30 rounded-full" />
                                        <p className="text-[#214970]/40 text-xs font-light">
                                            Alignment Testing Setup
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Skills & Outcomes */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-[1px] bg-[#E8A87C]" />
                            <h3 className="text-xs tracking-[0.3em] text-[#E8A87C] uppercase font-semibold font-albert">
                                Key Learnings
                            </h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-semibold text-[#214970] mb-4 font-albert">
                                    Skills Developed
                                </h4>
                                <ul className="space-y-3">
                                    {[
                                        "Mechanical prototyping",
                                        "Iterative design methodology",
                                        "Problem-solving in research contexts",
                                        "Precision alignment techniques",
                                    ].map((skill, index) => (
                                        <motion.li
                                            key={skill}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center gap-3 text-gray-700 font-light font-dmsans"
                                        >
                                            <div className="w-2 h-2 bg-[#E8A87C] rounded-full flex-shrink-0" />
                                            {skill}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-[#214970] mb-4 font-albert">
                                    Project Impact
                                </h4>
                                <p className="text-gray-700 leading-relaxed font-light font-dmsans">
                                    This project strengthened my skills in
                                    mechanical prototyping, iterative design,
                                    problem-solving, and precision alignment in
                                    research instrumentation, while contributing
                                    to improved experimental accuracy in
                                    magnetic droplet manipulation research.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Final Showcase Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-2xl overflow-hidden"
                    >
                        <div className="bg-gradient-to-br from-[#214970] to-[#214970]/80 flex items-center justify-center p-8">
                            {/* <div className="text-center p-8">
                                <div className="w-24 h-24 mx-auto mb-4 border-4 border-white/20 rounded-xl rotate-12" />
                                <p className="text-white/60 font-light">
                                    Insert Image: Final Assembly or Testing
                                    Result
                                </p>
                            </div> */}
                            <img
                                src="/actuator_preview.webp"
                                alt="Magnetic Actuator System"
                                className="max-w-full max-h-[900px] object-contain rounded-xl"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default page;
