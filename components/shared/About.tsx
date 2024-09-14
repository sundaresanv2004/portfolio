'use client'

import { useEffect, useRef } from 'react'
import styles from "@/app/styles"
import { motion, useInView, useAnimation } from 'framer-motion'
import { Code, Brain, Globe } from 'lucide-react'

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
        <section ref={ref} className={`flex flex-col ${styles.paddingY} overflow-hidden`}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className={`flex flex-col xl:px-0 sm:px-16 px-6`}
            >
                <motion.h1 variants={itemVariants} className="text-start text-6xl font-semibold text-black mt-5 max-sm:text-5xl">
                    About Me
                </motion.h1>

                <motion.div variants={itemVariants} className={`${styles.paragraph} max-w-full mt-5 font-Space leading-loose text-black space-y-3 text-lg`}>
                    <p>
                        I&apos;m a BE CSE student based in Chennai, India, with a deep passion for machine learning (ML) and
                        deep learning (DL). My journey in technology has been an emotional roller coaster, filled with
                        building ML and DL models and crafting innovative software solutions in both web development and
                        AI. My decision to specialize in AI and ML comes from a profound belief in their transformative
                        power.
                    </p>
                    <p>
                        Witnessing the disruptive potential and increasing significance of these technologies across
                        diverse industries has inspired me to dedicate myself to mastering this cutting-edge domain.
                    </p>
                    <p>
                        In pursuit of specialization, I&apos;m particularly drawn to the intricacies of machine learning,
                        natural language processing (NLP), and computer vision. I envision a future where these
                        disciplines redefine technological innovation. Through hands-on projects and continuous
                        learning, I strive to stay abreast of industry trends and contribute meaningfully to advancing
                        AI-driven solutions.
                    </p>
                    <p>
                        Excited to be on this journey and looking forward to the future of AI!
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
                >
                    <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
                        <Code size={48} className="text-orange mb-4" />
                        <h3 className="text-xl text-black font-semibold mb-2">Web Development</h3>
                        <p className="text-muted-foreground">Crafting responsive and intuitive web applications using modern frameworks and best practices.</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
                        <Brain size={48} className="text-orange mb-4" />
                        <h3 className="text-xl text-black font-semibold mb-2">Machine Learning</h3>
                        <p className="text-muted-foreground">Developing intelligent systems that learn and adapt, pushing the boundaries of AI capabilities.</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
                        <Globe size={48} className="text-orange mb-4" />
                        <h3 className="text-xl text-black font-semibold mb-2">Innovation</h3>
                        <p className="text-muted-foreground">Exploring cutting-edge technologies to create solutions that shape the future of tech.</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default About