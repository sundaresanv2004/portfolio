'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Home, RefreshCw } from 'lucide-react'

const GlitchText = ({ text }: { text: string }) => {
    return (
        <div className="relative inline-block">
            <motion.span
                className="absolute top-0 left-0 text-primary"
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
                className="absolute top-0 left-0 text-secondary"
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

const BackgroundAnimation = () => {
    return (
        <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-gradient-xy" />
        </div>
    )
}

export default function NotFound() {
    const [countdown, setCountdown] = useState(30)
    const controls = useAnimation()
    const router = useRouter()

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer)
                    router.push('/')
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [router])

    useEffect(() => {
        controls.start({
            width: '100%',
            transition: { duration: 30, ease: 'linear' }
        })
    }, [controls])

    const handleRefreshClick = () => {
        router.refresh()
    }

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
            <BackgroundAnimation />
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="h-[40vh] w-[40vh] bg-gradient-to-r from-primary to-secondary rounded-full filter blur-3xl animate-pulse" />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center z-10 px-4"
            >
                <h1 className="text-9xl font-bold text-foreground mb-4 glitch-effect">
                    <GlitchText text="404" />
                </h1>
                <p className="text-2xl text-muted-foreground mb-8">Oops! Page not found</p>
                <div className="mb-8 text-3xl font-mono text-primary">
                    Redirecting in {countdown} seconds
                </div>
                <div className="space-y-4 mb-8">
                    <p className="text-muted-foreground">Don&apos;t worry, we&apos;re taking you back home!</p>
                    <div className="w-full bg-muted rounded-full h-2.5">
                        <motion.div
                            className="bg-primary h-2.5 rounded-full"
                            initial={{ width: 0 }}
                            animate={controls}
                        />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link href="/">
                        <Button variant="default" size="lg">
                            <Home className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                    <Button variant="outline" size="lg" onClick={handleRefreshClick}>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Refresh Page
                    </Button>
                </div>
            </motion.div>
            <div className="absolute bottom-4 left-4 right-4 text-center text-muted-foreground">
                <p>If you believe this is an error, please contact the site administrator.</p>
            </div>
        </div>
    )
}