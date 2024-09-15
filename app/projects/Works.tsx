'use client'

import { useState, useRef } from 'react'
import Image from "next/image"
import Link from "next/link"
import { works } from "@/constants"
import { motion, useInView } from 'framer-motion'
import { ArrowLeft, Code, Link as LinkIcon, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ProjectWorks() {
    const [searchTerm, setSearchTerm] = useState('')
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.1 })

    const filteredWorks = works.filter(work =>
        work.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        work.content.toLowerCase().includes(searchTerm.toLowerCase())
    )

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
        <section ref={ref} className="py-16 px-6 sm:px-16 xl:px-0 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex justify-between items-center mb-10"
            >
                <div>
                    <h1 className="text-start text-5xl md:text-6xl font-bold text-gray-900 mb-2">All Projects</h1>
                    <p className="text-gray-600 text-lg">Explore all of my projects</p>
                </div>
                <Link href="/">
                    <Button variant="outline" className="flex items-center bg-[#FF8C63] text-white border-white hover:bg-[#FF8C63]/90 transition-colors duration-300">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Button>
                </Link>
            </motion.div>

            <div className="mb-8">
                <Input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full max-w-md py-6 text-black"
                />
            </div>

            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {filteredWorks.map((work) => (
                    <motion.div
                        key={work.id}
                        variants={itemVariants}
                        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <Image
                                src={work.image}
                                alt={work.title}
                                fill={true}
                                style={{ objectFit: 'cover' }}
                                className="transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-semibold text-gray-900">{work.title}</h3>
                            </div>
                            <p className="text-gray-600 line-clamp-3 mb-4">
                                {work.content}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-2">
                                    {work.github && (
                                        <a
                                            href={work.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-[#FF8C63] transition-colors duration-300"
                                        >
                                            <Code size={20} />
                                        </a>
                                    )}
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-[#FF8C63] hover:text-[#FF8C63] hover:bg-orange-50"
                                    onClick={() => {
                                        console.log(`Get link for project: ${work.id}`)
                                    }}
                                >
                                    Get Link
                                    <LinkIcon className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}