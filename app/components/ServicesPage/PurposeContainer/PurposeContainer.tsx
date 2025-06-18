import { PurposeSectionType } from "@/app/utils/types/types";
import styles from "./PurposeContainer.module.css";
import SectionHeader from "../../Common/SectionHeader/SectionHeader";

type PurposeContainerProps = {
    purposeSectionData: PurposeSectionType;
};

const PurposeContainer = ({ purposeSectionData }: PurposeContainerProps) => {
    const { title, description, image, secondDescription } = purposeSectionData.fields;

    return (
        <section id={styles.purposeContainer}>
            <div className={styles.purposeContent}>
                <SectionHeader
                    title={title}
                />
                <p className={styles.description}>
                    {description}
                </p>
                <p>
                    {secondDescription}
                </p>
            </div>
            <div>
                <img
                    src={image.fields.file.url}
                    alt="Purpose Section Image"
                    className={styles.aboutImage}
                />
            </div>
        </section>
    );
};

export default PurposeContainer;
