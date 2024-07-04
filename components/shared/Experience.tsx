import styles from "@/app/styles";

const Experience = () => {
    return (
        <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <h1 className="text-start text-6xl font-Space font-semibold mb-2 max-sm:text-5xl text-white">Work Experience</h1>
            </div>
        </section>
    )
}

export default Experience
