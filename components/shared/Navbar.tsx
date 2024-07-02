"use client";
import { navLinks } from "@/constants";
import {menu} from "@/public/assets";
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from 'react';


const Navbar = () => {
    const [active, setActive] = useState("Home");
    let commonStyle = "transition ease-in-out delay-75";

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <span className="text-white text-2xl font-semibold">Sundaresan V</span>

            <div className="flex sm:hidden">
                <Sheet>
                    <SheetTrigger asChild className="flex-1">
                        <Button variant='ghost'>
                            <Image
                                src={menu}
                                alt=""
                                className="w-[25px] h-[25px] object-contain"
                            />
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="top" className="bg-dark_blue h-auto">
                        <SheetHeader>
                            <SheetTitle className="text-start mb-5">
                                <span className="text-2xl font-semibold">Sundaresan V</span>
                            </SheetTitle>
                        </SheetHeader>

                        <ul className="list-none flex justify-end items-start flex-1 flex-col">
                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`font-medium cursor-pointer text-[16px] hover:text-orange
                                        ${commonStyle} ${
                                        active === nav.title ? "text-white" : "text-dimWhite"
                                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                                    onClick={() => setActive(nav.title)}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </SheetContent>
                </Sheet>
            </div>

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-normal cursor-pointer text-[16px] hover:text-orange
                            ${commonStyle} ${
                            active === nav.title ? "text-white" : "text-dimWhite"
                        } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                        onClick={() => setActive(nav.title)}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>

        </nav>
    );
}

export default Navbar;