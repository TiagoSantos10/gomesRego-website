import styles from "./SectionDescription.module.css";

type SectionDescriptionProps = {
    description: string;
};

const SectionDescription = ({ description }: SectionDescriptionProps) => {
    return (
        <div id={styles.sectionDescriptionContainer}>
            <p>{description}</p>
        </div>
    );
};

export default SectionDescription;
