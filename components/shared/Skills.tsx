'use client'

import { useRef, useState, useEffect } from 'react'
import { StaticImageData } from 'next/image'
import { motion, useInView } from 'framer-motion'
import Image from "next/image"
import { skills } from "@/constants"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Skill = {
    id: string | number;
    title: string;
    img: StaticImageData | string;
    category: string;
    description: string;
}

export default function Skills() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
    const [showGradient, setShowGradient] = useState(true)

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

    const skillCategories = [
        { id: 'all', label: 'All Skills' },
        { id: 'machine learning', label: 'Machine Learning' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'database', label: 'Database' },
        { id: 'mobile', label: 'Mobile' },
        { id: 'tools', label: 'Tools & Others' },
    ]

    useEffect(() => {
        const tabsContainer = document.querySelector('.tabs-container')
        if (tabsContainer) {
            const handleScroll = () => {
                const isScrollable = tabsContainer.scrollWidth > tabsContainer.clientWidth
                const isScrolledToEnd = tabsContainer.scrollLeft + tabsContainer.clientWidth >= tabsContainer.scrollWidth - 10
                setShowGradient(isScrollable && !isScrolledToEnd)
            }

            tabsContainer.addEventListener('scroll', handleScroll)
            window.addEventListener('resize', handleScroll)

            // Initial check
            handleScroll()

            return () => {
                tabsContainer.removeEventListener('scroll', handleScroll)
                window.removeEventListener('resize', handleScroll)
            }
        }
    }, [])

    return (
        <section ref={ref} className="py-16">
            <div className="">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="text-left mb-12"
                >
                    <h2 className="ext-start text-5xl font-bold text-gray-800 mb-4">My Skill Set</h2>
                    <p className="text-lg mb-8 text-slate-500 font-bold">
                        Harnessing cutting-edge technologies to build innovative solutions.
                    </p>
                </motion.div>

                <Tabs defaultValue="all" className="mb-12">
                    <div className="relative">
                        <div className="overflow-x-auto pb-4 mb-4 custom-scrollbar tabs-container">
                            <TabsList className="flex justify-start bg-transparent whitespace-nowrap">
                                {skillCategories.map((category) => (
                                    <TabsTrigger
                                        key={category.id}
                                        value={category.id}
                                        className="px-4 py-2 text-gray-600 bg-white hover:bg-gray-100 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 rounded-md mr-2 flex-shrink-0"
                                    >
                                        {category.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>
                        {showGradient && (
                            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none animate-pulse" />
                        )}
                    </div>
                    {skillCategories.map((category) => (
                        <TabsContent key={category.id} value={category.id}>
                            <motion.div
                                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
                                variants={containerVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                            >
                                {skills
                                    .filter(skill => category.id === 'all' || skill.category === category.id)
                                    .map((skill) => (
                                        <motion.div
                                            key={skill.id}
                                            variants={itemVariants}
                                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
                                            onClick={() => setSelectedSkill(skill)}
                                        >
                                            <div className="p-6 flex flex-col items-center">
                                                <div className="w-16 h-16 mb-4 relative">
                                                    <Image
                                                        src={skill.img}
                                                        alt={skill.title}
                                                        width={64}
                                                        height={64}
                                                        className="transition-transform duration-300 hover:scale-110"
                                                    />
                                                </div>
                                                <h3 className="text-lg font-semibold text-gray-800 text-center">
                                                    {skill.title}
                                                </h3>
                                            </div>
                                        </motion.div>
                                    ))}
                            </motion.div>
                        </TabsContent>
                    ))}
                </Tabs>

                {selectedSkill && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-xl shadow-lg p-6 mt-8"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-black">{selectedSkill.title}</h3>
                        <p className="text-gray-600 mb-4">{selectedSkill.description}</p>
                        <Button onClick={() => setSelectedSkill(null)} className="">Close</Button>
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-16 text-left"
                >
                    <p className="text-xl text-gray-600 italic">
                        Continuously expanding my skillset to stay at the forefront of technology.
                    </p>
                </motion.div>
            </div>

            <style jsx global>{`
                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: #CBD5E0 #F1F5F9;
                }

                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                    height: 6px;
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #F1F5F9;
                    border-radius: 3px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #CBD5E0;
                    border-radius: 3px;
                    border: 2px solid #F1F5F9;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: #A0AEC0;
                }

                @keyframes pulse {
                    0%, 100% { opacity: 0.6; }
                    50% { opacity: 1; }
                }

                .animate-pulse {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
        </section>
    )
}