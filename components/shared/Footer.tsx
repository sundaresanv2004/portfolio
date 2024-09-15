'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from "@/app/styles";
import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-dark_blue`}
        >
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <motion.div variants={itemVariants} className="flex-1 flex flex-col justify-start mr-10">
                    <h2 className="font-bold text-white text-3xl mb-4">Sundaresan V</h2>
                    <p className={`${styles.paragraph} mt-4 max-w-[312px] text-gray-400`}>
                        Transforming ideas into innovative solutions through code and creativity.
                    </p>
                    <div className="flex flex-col space-y-2 mt-4">
                        <div className="flex items-center text-gray-400">
                            <MapPin className="w-5 h-5 mr-2" />
                            Chennai, India
                        </div>
                        <div className="flex items-center text-gray-400">
                            <Mail className="w-5 h-5 mr-2" />
                            sundaresanv2004@gmail.com
                        </div>
                        <div className="flex items-center text-gray-400">
                            <Phone className="w-5 h-5 mr-2" />
                            +91 90950 77567
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex-1 w-full flex justify-between md:justify-end flex-wrap md:mt-0 mt-10">
                    {footerLinks.map((footerlink) => (
                        <div key={footerlink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                            <h4 className="font-medium text-[18px] leading-[27px] text-white mb-4">
                                {footerlink.title}
                            </h4>
                            <ul className="list-none mt-4">
                                {footerlink.links.map((link, index) => (
                                    <li
                                        key={link.name}
                                        className={`font-normal text-[16px] leading-[24px] text-dimWhite hover:text-orange transition-colors duration-300 cursor-pointer ${
                                            index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                                        }`}
                                    >
                                        <a href={`${link.link}`}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </motion.div>
            </div>

            <motion.div variants={itemVariants} className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
                <p className="font-normal text-center text-[14px] leading-[27px] text-white">
                    © 2024 Sundaresan V. All rights reserved.
                </p>
                <div className="flex flex-row md:mt-0 mt-6">
                    {socialMedia.map((social, index) => (
                        <HoverCard key={social.id}>
                            <HoverCardTrigger asChild>
                                <a href={social.link} target="_blank" rel="noopener noreferrer" className="mr-4">
                                    <Image
                                        src={social.icon}
                                        alt={social.id}
                                        className="w-[21px] h-[21px] object-contain cursor-pointer hover:opacity-80 transition-opacity duration-300"
                                    />
                                </a>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                                <div className="flex items-center space-x-4">
                                    <Avatar>
                                        <AvatarImage src={social.profile} alt={social.id_name} />
                                        <AvatarFallback>{social.id_name[0]}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="text-sm font-semibold">{social.id_name}</h4>
                                        <p className="text-sm text-gray-500">{social.des}</p>
                                    </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Footer;