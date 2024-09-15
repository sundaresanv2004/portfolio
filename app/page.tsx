import styles from "@/app/styles";
import { Hero, Navbar, About, Work, Experience, Skills, Contact, Footer } from "@/components/shared";

export default function Home() {
    return (
        <main className="bg-dark_blue w-full overflow-hidden">
            <header className="fixed top-0 backdrop-blur-md w-full z-10 mix-blend-difference">
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Navbar />
                    </div>
                </div>
            </header>

            <div id="home" className={`bg-dark_blue mt-5 max-md:mt-20 ${styles.flexStart}`}>
                <div className={`${styles.boxWidth} max-sm:pt-20`}>
                    <Hero />
                </div>
            </div>

            <div id="about" className={`bg-white ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth} max-sm:mt-16 mt-7`}>
                    <About />
                </div>
            </div>

            <div id="work" className={`bg-white ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth} max-sm:mt-20 mt-8`}>
                    <Work />
                </div>
            </div>

            <div className={`bg-dark_blue ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <Experience />
                </div>
            </div>

            <div id="skill" className={`bg-white ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth} max-sm:mt-14 mt-9`}>
                    <Skills />
                </div>
            </div>

            <div id="contact" className={`bg-white ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth} max-sm:mt-24 mt-9`}>
                    <Contact />
                </div>
            </div>

            <div className={`bg-dark_blue ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </main>
    );
}