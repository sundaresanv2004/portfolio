import styles from "@/app/styles";

const Experience = () => {
    return (
        <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <h1 className="flex-1 font-poppins font-bold ss:text-[92px] lg:text-[72px] md:text-[62px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                    Work Experience
                </h1>
            </div>
        </section>
    )
}

export default Experience
