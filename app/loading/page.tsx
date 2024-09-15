'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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
            }, 60)

            return () => clearTimeout(timeout)
        }
    }, [currentIndex, text])

    return (
        <div className="font-mono text-2xl text-primary-foreground">
            {currentText}
            <span className="animate-pulse">_</span>
        </div>
    )
}

const DataStream = () => {
    const [streams, setStreams] = useState<string[]>([])

    useEffect(() => {
        const newStreams = Array.from({ length: 10 }, () =>
            Array.from({ length: 50 }, () => Math.round(Math.random())).join('')
        )
        setStreams(newStreams)
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
            {streams.map((stream, i) => (
                <div
                    key={i}
                    className="absolute text-primary/50 text-sm whitespace-nowrap"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `fall ${5 + Math.random() * 10}s linear infinite`,
                    }}
                >
                    {stream}
                </div>
            ))}
        </div>
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

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden z-20">
            <DataStream />
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="h-[40vh] w-[40vh] bg-gradient-to-r from-primary to-secondary rounded-full filter blur-3xl animate-pulse" />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center z-10 px-4 space-y-8"
            >
                <Loader2 className="w-16 h-16 text-primary animate-spin mx-auto" />
                <LoadingText text="Initializing Reality Simulation..." />
                <div className="w-64 mx-auto">
                    <Progress value={progress} className="h-2" />
                </div>
                <div className="text-sm text-muted-foreground">
                    Loading: {progress}%
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Quantum Fluctuations Stabilized: {Math.floor(progress / 2)}%</p>
                    <p>Parallel Universes Aligned: {Math.floor(progress / 3)}%</p>
                    <p>Temporal Paradoxes Resolved: {Math.floor(progress / 4)}%</p>
                </div>
            </motion.div>
        </div>
    )
}