import { PartnersType } from "@/app/utils/types/types";
import PartnerCard from "./PartnerCard/PartnerCard";
import styles from "./PartnersSection.module.css";
import SectionHeader from "../../Common/SectionHeader/SectionHeader";

type PartnersSectionProps = {
    partners: PartnersType[];
};

const PartnersSection: React.FC<PartnersSectionProps> = ({ partners }) => (
    <section id={styles.partnersSection}>
        <SectionHeader title="Sócios" />
        <div className={styles.partnersContent}>
            {partners.map((partner) => (
                <PartnerCard key={partner.sys.id} partner={partner} />
            ))}
        </div>
    </section>
);

export default PartnersSection;
