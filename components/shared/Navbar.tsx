import styles from "@/app/styles";
import Image from "next/image";
import {menu} from "@/public/assets";
import {
    Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet"
import {Button} from "@/components/ui/button";
import {navLinks} from "@/constants";


const Navbar = () => {
    let commonStyle = "transition ease-in-out delay-75";

    return (
        <nav className="w-full flex py-6 justify-between items-center">
            <span className={`${styles.heading3} `}>Sundaresan V</span>

            <div className="flex sm:hidden">
                <Sheet>
                    <SheetTrigger asChild className="flex-1">
                        <Button variant='ghost'>
                            <Image
                                src={menu}
                                alt=""
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
                                <li
                                    key={nav.id}
                                    className={`font-medium cursor-pointer text-md hover:text-orange
                                        ${commonStyle} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
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
                        className={`font-normal cursor-pointer text-md hover:text-orange
                        ${commonStyle} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>

        </nav>
    );
}

export default Navbar;