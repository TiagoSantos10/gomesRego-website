import { CardsType, CompanyGuidelinesDataType } from "@/app/utils/types/types";
import Card from "../../Common/Card/Card";
import SectionDescription from "../../Common/SectionDescription/SectionDescription";
import SectionHeader from "../../Common/SectionHeader/SectionHeader";
import styles from "./CompanyGuidelines.module.css";

type CompanyGuidelinesProps = {
    data: CompanyGuidelinesDataType;
};

const CompanyGuidelines = ({ data }: CompanyGuidelinesProps) => {
    const {
        title,
        headerDescription,
        footerDescription,
        cardsSection
    } = data.fields;

    return (
        <section id={styles.companyGuidelinesContainer}>
            <SectionHeader title={title} />
            <SectionDescription description={headerDescription} />
            <div className={styles.cardsSection}>
                {cardsSection.map((card: CardsType) => (
                    <Card
                        key={card.sys.id}
                        title={card.fields.cardTitle}
                        description={card.fields.cardDescription}
                        cardIcon={card.fields.cardIcon.fields.file.url}
                    />
                ))}
            </div>
            <SectionDescription
                description={footerDescription}
            />
        </section>
    );
};

export default CompanyGuidelines;
