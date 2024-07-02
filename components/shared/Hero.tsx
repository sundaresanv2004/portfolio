import styles from "@/app/styles";
import { profile } from "@/public/assets";
import Image from "next/image";

const Hero = () => (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-bold ss:text-[92px] lg:text-[72px] md:text-[62px]
                text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                    Hello I&apos;m<br className="sm:block hidden"/>{" "}
                    <span className="text-orange pl-0 lg:pl-8 md:pl-4 ss:text-[92px] lg:text-[72px] md:text-[62px]
                text-[52px]">Sundaresan V</span>{" "}
                </h1>

            </div>

            <p className={`${styles.paragraph} max-w-[650px] mt-5 pl-0 lg:pl-16 md:pl-8 text-xl text-muted-foreground`}>
                BE CSE student specializing in AI and ML, dedicated to developing intelligent solutions and innovative web applications.
            </p>
        </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <Image src={profile} alt="" className="w-auto h-[80%] relative z-[5]"/>

            <div className="absolute z-[0] w-[20%] h-[15%] top-10 pink__gradient"/>
            <div className="absolute z-[0] w-[60%] h-[60%] right-20 bottom-20 blue__gradient"/>
        </div>
    </section>
)

export default Hero;