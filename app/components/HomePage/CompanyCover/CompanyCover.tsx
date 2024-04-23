import { Italianno } from "next/font/google";
import styles from "./CompanyCover.module.css";

const italianno = Italianno({
    subsets: ["latin"],
    weight: "400"
});

const CompanyCover = () => (
    <section className={styles.companyCoverSection}>
        <div className={styles.textInsideImg}>
            <div className={styles.upperText}>Há mais de</div>
            <div className={`${styles.middleText} ${italianno.className}`}>5</div>
            <div className={styles.bottomText}>anos</div>
        </div>
        <div className={styles.grasImg} />
    </section>
);

export default CompanyCover;
