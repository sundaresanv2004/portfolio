import styles from "@/app/styles";
import {Navbar, Hero, AboutMe, Work, Experience, Skills, Footer } from "@/components/shared";

export default function Home() {
  return (
      <div className="bg-dark_blue w-full overflow-hidden">

          <header className="fixed top-0 backdrop-blur-xl w-full z-10 mix-blend-difference">
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                  <div className={`${styles.boxWidth}`}>
                      <Navbar />
                  </div>
              </div>
          </header>

          <div id="home" className={`bg-dark_blue mt-5 max-md:mt-20 ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Hero/>
              </div>
          </div>

          <div className={`bg-white ${styles.flexStart} ${styles.paddingX}`}>
              <div className={`${styles.boxWidth} max-sm:pt-20`}>
                  <AboutMe />
              </div>
          </div>

          <div className={`bg-white ${styles.flexStart} ${styles.paddingX}`}>
              <div className={`${styles.boxWidth}`}>
                  <Work />
              </div>
          </div>

          <div className={`bg-dark_blue ${styles.flexStart} ${styles.paddingX}`}>
              <div className={`${styles.boxWidth}`}>
                  <Experience />
              </div>
          </div>

          <div className={`bg-white ${styles.flexStart} ${styles.paddingX}`}>
              <div className={`${styles.boxWidth}`}>
                  <Skills />
              </div>
          </div>

          <div className={`bg-dark_blue ${styles.flexStart} ${styles.paddingX}`}>
              <div className={`${styles.boxWidth}`}>
                  <Footer />
              </div>
          </div>
      </div>
  );
}
