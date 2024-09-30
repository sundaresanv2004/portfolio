'use client'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experiences } from '@/constants'

const Experience = () => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    }

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-start text-6xl font-bold text-white mt-5 mb-8 max-sm:text-5xl"
                >
                    Work Experience
                </motion.h2>
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="space-y-6"
                >
                    {experiences.map((exp, index) => (
                        <motion.div key={index} variants={cardVariants}>
                            <Card className="w-full bg-card">
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                                        <div>
                                            <CardTitle className="text-xl font-semibold">{exp.position}</CardTitle>
                                            <CardDescription className="text-lg">{exp.company}</CardDescription>
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.duration}</p>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm mb-4">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill, skillIndex) => (
                                            <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Experience