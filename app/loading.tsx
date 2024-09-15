'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { Progress } from "@/components/ui/progress"

const LoadingText = ({ text }: { text: string }) => {
    const [currentText, setCurrentText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex])
                setCurrentIndex(prevIndex => prevIndex + 1)
            }, 80)

            return () => clearTimeout(timeout)
        }
    }, [currentIndex, text])

    return (
        <div className="font-mono text-2xl text-primary-foreground">
            {currentText}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut" }}
            >
                _
            </motion.span>
        </div>
    )
}

const BackgroundAnimation = () => {
    return (
        <motion.div
            className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 2 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-gradient-xy" />
        </motion.div>
    )
}

export default function Loading() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress >= 100) {
                    clearInterval(timer)
                    return 100
                }
                return prevProgress + 2
            })
        }, 40)

        return () => clearInterval(timer)
    }, [])

    const progressItems = [
        { label: "Loading Projects", value: Math.floor(progress / 2) },
        { label: "Preparing Skills Showcase", value: Math.floor(progress / 3) },
        { label: "Optimizing Experience Section", value: Math.floor(progress / 4) },
    ]

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden z-20">
            <BackgroundAnimation />
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1.5 }}
            >
                <motion.div
                    className="h-[40vh] w-[40vh] bg-gradient-to-r from-primary to-secondary rounded-full filter blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 10,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center z-10 px-4 space-y-8"
            >
                <motion.div
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    <Loader2 className="w-16 h-16 text-primary mx-auto" />
                </motion.div>
                <LoadingText text="Loading Portfolio..." />
                <div className="w-64 mx-auto">
                    <Progress value={progress} className="h-2" />
                </div>
                <motion.div
                    className="text-sm text-muted-foreground"
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    Progress: {progress}%
                </motion.div>
                <div className="space-y-2 text-sm text-muted-foreground">
                    <AnimatePresence>
                        {progressItems.map((item, index) => (
                            <motion.p
                                key={item.label}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {item.label}: {item.value}%
                            </motion.p>
                        ))}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    )
}