import styles from "@/app/styles";

const About = () => {
    return (
        <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <h1 className="text-start text-6xl font-semibold text-black mt-5 max-sm:text-5xl">About Me</h1>

                <div className={`${styles.paragraph} max-w-full mt-5 font-Space leading-loose text-black space-y-3 text-lg`}>
                    <p>
                        I’m a BE CSE student based in Chennai, India, with a deep passion for machine learning (ML) and
                        deep learning (DL). My journey in technology has been an emotional roller coaster, filled with
                        building ML and DL models and crafting innovative software solutions in both web development and
                        AI. My decision to specialize in AI and ML comes from a profound belief in their transformative
                        power.
                    </p>
                    <p>
                        Witnessing the disruptive potential and increasing significance of these technologies across
                        diverse
                        industries has inspired me to dedicate myself to mastering this cutting-edge domain.
                    </p>
                    <p>
                        In pursuit of specialization, I’m particularly drawn to the intricacies of machine learning,
                        natural language processing (NLP), and computer vision. I envision a future where these
                        disciplines redefine technological innovation. Through hands-on projects and continuous
                        learning, I strive to stay abreast of industry trends and contribute meaningfully to advancing
                        AI-driven solutions.
                    </p>
                    <p>
                        Excited to be on this journey and looking forward to the future of AI!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
