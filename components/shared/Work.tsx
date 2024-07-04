import styles from "@/app/styles";
import Image from "next/image";
import { works } from "@/constants";

const Work = () => {
    return (
        <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div>
                    <h1 className="text-start text-6xl font-Space font-semibold text-black mb-2 max-sm:text-5xl">Discover My Work</h1>
                    <p className="text-slate-500 font-bold text-md">Here are some of my projects that I&#39;ve worked
                        on.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2 w-full mt-10">
                    {works.map((work, index) => (
                        <div
                            key={work.id}
                            className="mt-6 relative flex flex-col rounded-lg bg-white bg-clip-border text-gray-700
                            ring-1 ring-gray-500 hover:shadow-lg hover:shadow-slate-600 hover:-translate-y-1.5 transition ease-in-out"
                        >
                            <div className="h-40 overflow-hidden rounded-t-lg rounded-b-none">
                                <Image
                                    src={work.image}
                                    alt=""
                                    style={{
                                        objectFit: "cover",
                                    }}
                                    className="h-[100%] w-[100%]  bg-clip-border"
                                />
                            </div>

                            <div className="p-6">
                                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    {work.title}
                                </h5>
                                <div className="line-clamp-3">
                                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                        {work.content}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Work;
