import { PartnersSectionType, PartnersType } from "@/app/utils/types/types";
import PartnerCard from "./PartnerCard/PartnerCard";
import styles from "./PartnersSection.module.css";
import SectionHeader from "../../Common/SectionHeader/SectionHeader";
import SectionDescription from "../../Common/SectionDescription/SectionDescription";

type PartnersSectionProps = {
    partnersData: PartnersSectionType;
};

const PartnersSection: React.FC<PartnersSectionProps> = ({ partnersData }) => {
    const {
        partnersList,
        sectionTitle,
        sectionDescription
    } = partnersData.fields;

    return (
        <section id={styles.partnersSection}>
            <SectionHeader title={sectionTitle} />
            <SectionDescription description={sectionDescription} />
            <div className={styles.partnersContent}>
                {partnersList.map((partner: PartnersType) => (
                    <PartnerCard key={partner.sys.id} partner={partner} />
                ))}
            </div>
        </section>
    );
};

export default PartnersSection;
