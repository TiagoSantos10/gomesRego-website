import { Almarai } from "next/font/google";
import { ApproachItemType } from "@/app/utils/types/types";
import styles from "./ApproachSection.module.css";
import ApproachItem from "./ApproachItem/ApproachItem";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

type ApproachSectionProps = {
    sectionHeader: string;
    approachItems: ApproachItemType[];
};

const ApproachSection: React.FC<ApproachSectionProps> = ({ sectionHeader, approachItems }) => {
    return (
        <section className={styles.approachSection} id="approach">
            <h1 className={`${almarai.className} ${styles.headingTitle}`}>{sectionHeader}</h1>
            <div className={styles.approachGroup}>
                {approachItems.map((item) => (
                    <ApproachItem key={item.sys.id} item={item} />
                ))}
            </div>
        </section>
    );};

export default ApproachSection;
