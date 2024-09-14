'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from "next/image"
import { skills } from "@/constants"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Skill = {
    id: string;
    title: string;
    img: string;
    category: string;
    proficiency: number;
    description: string;
}

export default function Skills() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

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
                    <TabsList className="flex justify-start mb-8 bg-transparent">
                        {skillCategories.map((category) => (
                            <TabsTrigger
                                key={category.id}
                                value={category.id}
                                className="px-4 py-2 text-gray-600 bg-white hover:bg-gray-100 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 rounded-md mr-2"
                            >
                                {category.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
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
        </section>
    )
}