'use client'

import { useRef } from 'react'
import styles from "@/app/styles"
import { skills } from "@/constants"
import Image from "next/image"
import { motion, useInView } from 'framer-motion'

const Skills = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100
            }
        }
    }

    return (
        <section ref={ref} className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-start text-6xl font-Space font-semibold text-black mb-2 max-sm:text-5xl">What I Do</h1>
                    <p className="text-slate-500 font-bold text-md">
                        The tech&apos;s that I&apos;ve been using to build my projects.
                    </p>
                </motion.div>

                <motion.div
                    className="grid lg:grid-cols-6 gap-8 md:grid-cols-3 grid-cols-2 w-full mt-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.id}
                            variants={itemVariants}
                            className="w-full mx-auto rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl
                            transition ease-in-out duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex justify-center items-center h-32 bg-gray-50 p-4">
                                <Image
                                    src={skill.img}
                                    alt={skill.title}
                                    width={80}
                                    height={80}
                                    style={{ objectFit: 'contain' }}
                                    className="transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="bg-white p-4">
                                <h4 className="text-lg font-semibold text-center text-gray-800">
                                    {skill.title}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-600 italic">
                        Always learning and expanding my skillset to stay at the forefront of technology.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills