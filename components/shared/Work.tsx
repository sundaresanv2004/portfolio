'use client'

import { useState, useRef } from 'react'
import styles from "@/app/styles"
import Image from "next/image"
import { works } from "@/constants"
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, ChevronDown, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const Work = () => {
    const [expandedWork, setExpandedWork] = useState<string | null>(null)
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
        hidden: { y: 50, opacity: 0 },
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
            <div className={`flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 w-full`}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-between items-center mb-10"
                >
                    <div>
                        <h1 className="text-start text-6xl font-Space font-semibold text-black mb-2 max-sm:text-5xl">Discover My Work</h1>
                        <p className="text-slate-500 font-bold text-md">Here are some of my projects that I&#39;ve worked on.</p>
                    </div>
                </motion.div>

                <motion.div
                    className="grid lg:grid-cols-3 gap-10 md:grid-cols-2 w-full"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {works.map((work, index) => (
                        <motion.div
                            key={work.id}
                            variants={itemVariants}
                            className="mt-6 relative flex flex-col rounded-lg bg-white bg-clip-border text-gray-700
                            ring-1 ring-gray-300 hover:shadow-xl transition ease-in-out duration-300"
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className="h-52 overflow-hidden rounded-t-lg">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    width={600}
                                    height={400}
                                    style={{ objectFit: 'cover' }}
                                    className="h-full w-full transition-transform duration-300 hover:scale-110"
                                />
                            </div>

                            <div className="p-6 flex flex-col h-52">
                                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    {work.title}
                                </h5>
                                <div className={`${expandedWork === work.id ? '' : 'line-clamp-3'} flex-grow`}>
                                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                        {work.content}
                                    </p>
                                </div>
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
                    <Button variant="outline" className="md:hidden inline-flex items-center">
                        View All Projects
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}

export default Work