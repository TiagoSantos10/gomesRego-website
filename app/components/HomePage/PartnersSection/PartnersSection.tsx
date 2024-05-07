import { Almarai } from "next/font/google";
import { PartnersType } from "@/app/utils/types/types";
import PartnerCard from "./PartnerCard/PartnerCard";
import styles from "./PartnersSection.module.css";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

type PartnersSectionProps = {
    partners: PartnersType[];
};

const PartnersSection: React.FC<PartnersSectionProps> = ({ partners }) => (
    <section id={styles.partnersSection}>
        <h1 className={`section-title ${almarai.className}`}>
            Sócios
        </h1>
        <div className={styles.partnersContent}>
            {partners.map((partner) => (
                <PartnerCard key={partner.sys.id} partner={partner} />
            ))}
        </div>
    </section>
);

export default PartnersSection;
