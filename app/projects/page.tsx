import {Footer, Navbar} from "@/components/shared";
import styles from "@/app/styles";
import ProjectWorks from "@/app/projects/Works";

export default function ProjectsPage() {


    return (
        <main className="bg-white w-full overflow-hidden">
            <header className="fixed top-0 backdrop-blur-md w-full z-10 mix-blend-difference">
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Navbar/>
                    </div>
                </div>
            </header>

            <div className={`${styles.paddingY} max-sm:mt-10`}>
                <ProjectWorks />
            </div>

            <div className={`bg-dark_blue ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer/>
                </div>
            </div>
        </main>
    )
}