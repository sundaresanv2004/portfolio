'use client'
import { useState } from 'react'
import styles from "@/app/styles"
import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { navLinks } from "@/constants"
import { motion } from 'framer-motion'

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('')

    const handleSetActiveLink = (id: string) => {
        setActiveLink(id)
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex py-6 justify-between items-center"
        >
            <motion.span
                whileHover={{ scale: 1.05 }}
                className={`${styles.heading3} cursor-pointer`}
            >
                Sundaresan V
            </motion.span>

            <div className="flex sm:hidden">
                <Sheet>
                    <SheetTrigger asChild className="flex-1">
                        <Button variant='ghost'>
                            <Menu
                                className="w-[26px] h-[26px] object-contain"
                            />
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="top" className="bg-dark_blue h-auto">
                        <SheetHeader>
                            <SheetTitle className="text-start mb-5">
                                <span className={`${styles.heading3}`}>Sundaresan V</span>
                            </SheetTitle>
                        </SheetHeader>
                        <ul className="list-none flex justify-end items-start flex-1 flex-col mb-2">
                            {navLinks.map((nav, index) => (
                                <motion.li
                                    key={nav.id}
                                    whileHover={{ scale: 1.05, color: '#FFA500' }}
                                    className={`font-medium cursor-pointer text-md
                                    ${activeLink === nav.id ? 'text-orange' : 'text-white'}
                                    ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                                    onClick={() => handleSetActiveLink(nav.id)}
                                >
                                    <SheetClose asChild>
                                        <a href={`${nav.id}`}>{nav.title}</a>
                                    </SheetClose>
                                </motion.li>
                            ))}
                        </ul>
                    </SheetContent>
                </Sheet>
            </div>

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <motion.li
                        key={nav.id}
                        whileHover={{ scale: 1.05, color: '#FFA500' }}
                        className={`font-normal cursor-pointer text-md 
                        ${activeLink === nav.id ? 'text-orange' : 'text-white'} 
                        ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                        onClick={() => handleSetActiveLink(nav.id)}
                    >
                        <a href={`${nav.id}`}>{nav.title}</a>
                    </motion.li>
                ))}
            </ul>
        </motion.nav>
    )
}

export default Navbar