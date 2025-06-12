import { Almarai } from "next/font/google";
import styles from "./AboutUsHighlights.module.css";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "700"
});

type AboutUsHighlightsProps = {
    title?: string;
    description?: string;
    iconUrl?: string;
};

const AboutUsHighlights: React.FC<AboutUsHighlightsProps> = ({
    title,
    description,
    iconUrl
}) => {
    return (
        <div className={styles.highlightsContainer}>
            <div className={styles.iconContainer}>
                <img
                    src={iconUrl}
                    className={styles.icon}
                    alt={title || "Highlight Icon"}
                />
            </div>
            <div className={styles.highlightContent}>
                <span className={`${styles.highlightNumber} ${almarai.className}`}>{title}</span>
                <span className={styles.highlightText}>{description}</span>
            </div>
        </div>
    );
};

export default AboutUsHighlights;
