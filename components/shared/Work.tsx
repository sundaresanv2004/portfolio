'use client'
import { useRef } from 'react'
import Image from "next/image"
import Link from "next/link"
import { works } from "@/constants"
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Code } from 'lucide-react'
import { Button } from "@/components/ui/button"

const Work = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })

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
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 space-y-4 sm:space-y-0"
            >
                <div>
                    <h1 className="text-start text-5xl md:text-6xl font-bold text-gray-900 mb-2">Discover My Work</h1>
                    <p className="text-gray-600 text-lg">Here are some of my projects that I&apos;ve worked on.</p>
                </div>
                <Link href="/projects">
                    <Button
                        className="bg-[#FF8C63] text-white hover:bg-[#FF8C63]/90 transition-colors duration-300"
                    >
                        View All Projects
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </motion.div>

            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {works.slice(0, 3).map((work) => (
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
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{work.title}</h3>
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
                                            aria-label="View GitHub repository"
                                        >
                                            <Code size={20} />
                                        </a>
                                    )}
                                </div>
                                {/*<Button*/}
                                {/*    variant="ghost"*/}
                                {/*    size="sm"*/}
                                {/*    className="text-[#FF8C63] hover:text-[#FF8C63] hover:bg-orange-50"*/}
                                {/*    onClick={() => {*/}
                                {/*        console.log(`Get link for project: ${work.id}`)*/}
                                {/*    }}*/}
                                {/*>*/}
                                {/*    Get Link*/}
                                {/*    <LinkIcon className="ml-2 h-4 w-4" />*/}
                                {/*</Button>*/}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Work