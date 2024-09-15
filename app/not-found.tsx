'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowLeft, AlertTriangle, RefreshCw } from 'lucide-react'

const GlitchText = ({ text }: { text: string }) => {
    return (
        <div className="relative inline-block">
            <motion.span
                className="absolute top-0 left-0 text-red-500"
                animate={{
                    x: [-2, 2, -2],
                    y: [2, -2, 2],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 0.5,
                    ease: "linear",
                }}
            >
                {text}
            </motion.span>
            <motion.span
                className="absolute top-0 left-0 text-blue-500"
                animate={{
                    x: [2, -2, 2],
                    y: [-2, 2, -2],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 0.5,
                    ease: "linear",
                }}
            >
                {text}
            </motion.span>
            <span className="relative z-10">{text}</span>
        </div>
    )
}

const BinaryBackground = () => {
    const [binaryStrings, setBinaryStrings] = useState<string[]>([])

    useEffect(() => {
        setBinaryStrings(
            Array.from({ length: 10 }, () =>
                Array.from({ length: 50 }, () => Math.round(Math.random())).join('')
            )
        )
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden opacity-20">
            {binaryStrings.map((binary, i) => (
                <div
                    key={i}
                    className="absolute text-green-500 text-opacity-20 text-sm whitespace-nowrap"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `fall ${5 + Math.random() * 10}s linear infinite`,
                    }}
                >
                    {binary}
                </div>
            ))}
        </div>
    )
}

export default function NotFound() {
    const [countdown, setCountdown] = useState(60)
    const [quantumUncertainty, setQuantumUncertainty] = useState(0)
    const controls = useAnimation()

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => (prev > 0 ? prev - 1 : 0))
        }, 1000)

        setQuantumUncertainty(Math.floor(Math.random() * 100))

        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        controls.start({
            width: '100%',
            transition: { duration: 60, ease: 'linear' }
        })
    }, [controls])

    const handleRebootClick = () => {
        setCountdown(60)
        setQuantumUncertainty(Math.floor(Math.random() * 100))
        controls.set({ width: 0 })
        controls.start({
            width: '100%',
            transition: { duration: 60, ease: 'linear' }
        })
    }

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
            <BinaryBackground />
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="h-[40vh] w-[40vh] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl animate-pulse" />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center z-10 px-4"
            >
                <h1 className="text-9xl font-bold text-white mb-4 glitch-effect">
                    <GlitchText text="404" />
                </h1>
                <p className="text-2xl text-gray-300 mb-8">Reality.exe has stopped working</p>
                <div className="mb-8 text-5xl font-mono text-green-500">
                    T-{countdown.toString().padStart(2, '0')}:{(60 - (countdown % 60)).toString().padStart(2, '0')}
                </div>
                <div className="space-y-4 mb-8">
                    <p className="text-gray-400">Initiating reality reboot sequence...</p>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <motion.div
                            className="bg-green-500 h-2.5 rounded-full"
                            initial={{ width: 0 }}
                            animate={controls}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <Link href="/">
                        <Button variant="outline" size="lg">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Return to Safe Mode
                        </Button>
                    </Link>
                    <Button variant="ghost" size="sm" className="text-yellow-500 hover:text-yellow-400">
                        <AlertTriangle className="mr-2 h-4 w-4" />
                        Report Anomaly
                    </Button>
                </div>
            </motion.div>
            <div className="absolute bottom-4 left-4 right-4 text-center text-gray-500">
                <p>Error Code: REALITY_NOT_FOUND</p>
                <p className="mt-2 text-xs">Quantum Uncertainty Level: {quantumUncertainty}%</p>
            </div>
        </div>
    )
}