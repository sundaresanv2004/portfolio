'use client'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Brain, Code, Globe, Award, BookOpen, Rocket } from 'lucide-react'

const About = () => {
    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            controls.start('visible')
        }
    }, [controls, isInView])

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    }

    return (
        <section ref={ref} className="flex flex-col py-16 overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="flex flex-col px-6 sm:px-16 xl:px-0 max-w-7xl mx-auto"
            >
                <motion.h1 variants={itemVariants} className="text-start text-6xl font-bold text-gray-900 mt-5 mb-8 max-sm:text-5xl">
                    About Me
                </motion.h1>

                <motion.div variants={itemVariants} className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
                    <p>
                        I&apos;m a BE CSE student based in Chennai, India, passionate about exploring the intersection of
                        machine learning, deep learning, and web development. With a strong foundation in developing
                        ML/DL models and building innovative web applications, I focus on applying AI to real-world
                        problems. Specializing in NLP and computer vision, I thrive on bringing AI technologies to
                        practical, user-driven solutions. I’m excited about collaborating with forward-thinking teams
                        to drive AI innovation. Let’s connect!
                    </p>
                </motion.div>

                <motion.h2 variants={itemVariants} className="text-3xl font-semibold text-gray-900 mt-16 mb-8">
                    Core Competencies
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                >
                    <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
                        <Brain size={48} className="text-blue-600 mb-4" />
                        <h3 className="text-xl text-gray-900 font-semibold mb-2">Machine Learning & AI</h3>
                        <p className="text-gray-600">Developing intelligent systems that learn and adapt, pushing the boundaries of AI capabilities in NLP and computer vision.</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
                        <Code size={48} className="text-green-600 mb-4" />
                        <h3 className="text-xl text-gray-900 font-semibold mb-2">Full-Stack Development</h3>
                        <p className="text-gray-600">Crafting responsive and intuitive web applications using modern frameworks like React, Next.js, and Node.js.</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
                        <Globe size={48} className="text-purple-600 mb-4" />
                        <h3 className="text-xl text-gray-900 font-semibold mb-2">Innovation & Research</h3>
                        <p className="text-gray-600">Exploring cutting-edge technologies and conducting research to create solutions that shape the future of tech.</p>
                    </motion.div>
                </motion.div>

                <motion.h2 variants={itemVariants} className="text-3xl font-semibold text-gray-900 mt-16 mb-8">
                    Why Work With Me?
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <motion.div variants={itemVariants} className="flex flex-col items-start">
                        <Award size={36} className="text-yellow-500 mb-4" />
                        <h3 className="text-xl text-gray-900 font-semibold mb-2">Proven Track Record</h3>
                        <p className="text-gray-600">Consistently delivered high-quality projects, demonstrating a strong ability to translate complex concepts into practical solutions.</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex flex-col items-start">
                        <BookOpen size={36} className="text-red-500 mb-4" />
                        <h3 className="text-xl text-gray-900 font-semibold mb-2">Continuous Learner</h3>
                        <p className="text-gray-600">Committed to staying at the forefront of AI and web development through ongoing education and professional development.</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex flex-col items-start">
                        <Rocket size={36} className="text-indigo-500 mb-4" />
                        <h3 className="text-xl text-gray-900 font-semibold mb-2">Innovative Problem-Solver</h3>
                        <p className="text-gray-600">Adept at thinking outside the box to develop creative, efficient solutions to complex technical challenges.</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default About