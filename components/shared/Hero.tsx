'use client'

import styles from "@/app/styles"
import Image from "next/image"
import { profile } from "@/public/assets"
import { motion } from 'framer-motion'

const Hero = () => (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
            <div className="flex flex-row justify-between items-center w-full">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className={`flex-1 font-bold lg:text-[72px] md:text-[62px] text-[49px] text-white ss:leading-[100.8px] leading-[75px]`}
                >
                    Hello I&apos;m<br />{" "}
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-orange pl-0 lg:pl-9 lg:text-[72px] md:text-[62px] text-[46px]"
                    >
                        Sundaresan V
                    </motion.span>{" "}
                </motion.h1>
            </div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className={`${styles.paragraph} max-w-[650px] mt-5 pl-0 lg:pl-20 text-xl text-muted-foreground`}
            >
                BE CSE student specializing in AI and ML, dedicated to developing intelligent solutions and innovative
                web applications.
            </motion.p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
            <Image src={profile} alt="" className="w-auto h-[80%] relative z-[5]" />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute z-[0] w-[20%] h-[15%] top-10 pink__gradient"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute z-[0] w-[60%] h-[60%] right-20 bottom-20 blue__gradient"
            />
        </motion.div>
    </section>
)

export default Hero