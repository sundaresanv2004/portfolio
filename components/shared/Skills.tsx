import styles from "@/app/styles";
import { skills } from "@/constants";
import Image from "next/image";

const Skills = () => {
    return (
        <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

                <div>
                    <h1 className="text-start text-6xl font-Space font-semibold text-black mb-2 max-sm:text-5xl">What I Do</h1>
                    <p
                        className="text-slate-500 font-bold text-md"
                    >
                        The tech&apos;s that I&apos;ve been using to build my projects.
                    </p>
                </div>

                <div className="grid lg:grid-cols-6 gap-8 md:grid-cols-3 grid-cols-2 w-full mt-10">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.id}
                            className="w-full mx-auto rounded-md overflow-hidden bg-white ring-1 hover:shadow-slate-600
                            ring-black hover:shadow-lg hover:-translate-y-1.5 transition
                            ease-in-out">
                            <div className="flex justify-center">
                                <div
                                    className="flex items-center justify-center h-32"
                                >
                                    <Image
                                        src={skill.img}
                                        alt={skill.title}
                                        style={{
                                            objectFit: "contain",
                                        }}
                                        className="h-[70%] w-[80%]"
                                        />
                                </div>
                            </div>
                            <hr className="ring-black ring-0.5"/>
                            <div className=" flex items-center justify-center text-right h-14">
                                <h4 className="text-xl font-semibold text-black text-center">
                                    {skill.title}
                                </h4>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
