import { Almarai } from "next/font/google";
import styles from "./PartnersSection.module.css";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

const PartnersSection = () => (
    <section id={styles.partnersSection}>
        <h1 className={`section-title ${almarai.className}`}>
            Parceiros
        </h1>
        <div className={styles.partnersContent}>
            <div className={styles.item}>
                <div className={styles.dulceGomesImg} />
                <div className={styles.partnerName}>Dulce Gomes</div>
            </div>
            <div className={styles.item}>
                <div className={styles.antonioMouraImg} />
                <div className={styles.partnerName}>António Moura e Sá</div>
            </div>
            <div className={styles.item}>
                <div className={styles.marianelaRegoImg} />
                <div className={styles.partnerName}>Marianela Rego</div>
            </div>
        </div>
    </section>
);

export default PartnersSection;
