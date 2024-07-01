'use client';
import styles from "@/app/styles";
import {footerLinks, socialMedia} from "@/constants";
import { location } from "@/public/assets";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
            <h1 className="font-semibold text-white text-2xl font-mono">Sundaresan
                <span className="text-orange pl-2">V</span>
            </h1>

            <p className={`${styles.paragraph} mt-4 max-w-[312px] flex font-mono items-center`}>
                <Image
                    src={location}
                    alt=""
                    className="h-6 w-auto pr-2"
                />
                Chennai India (IND)
            </p>
            <div className="flex flex-row md:mt-0 pt-5">

                {socialMedia.map((social, index) => (
                    <HoverCard
                    key={index}>
                        <HoverCardTrigger asChild>
                            <Image
                                key={social.id}
                                src={social.icon}
                                alt={social.id}
                                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                                    index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                                }`}
                                onClick={() => window.open(social.link)}
                            />

                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                            <div className="flex justify-start space-x-4">
                                <Avatar>
                                    <AvatarImage src={social.profile} />
                                    <AvatarFallback></AvatarFallback>
                                </Avatar>

                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold">{social.id_name}</h4>
                                    <p className="text-sm">
                                        Contact me {social.id_name}
                                    </p>
                                </div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                ))}
            </div>
        </div>

        <div className="flex-[1.5] w-full justify-end max-sm:justify-between flex flex-row space-x-10 flex-wrap md:mt-0 mt-10">
            {footerLinks.map((footerlink) => (
                <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                    <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                        {footerlink.title}
                    </h4>
                    <ul className="list-none mt-4">
                        {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <Button variant="link" className="text-start -ml-4">{link.name}</Button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[16px] leading-[27px] text-white font-mono">
          Copyright Ⓒ 2024 Sundaresan V. Powered by <span className="pl-1 font-vold pr-1"> Next JS</span> Styled by Tailwind CSS & Shadcn UI
      </p>
    </div>
  </section>
);

export default Footer;
