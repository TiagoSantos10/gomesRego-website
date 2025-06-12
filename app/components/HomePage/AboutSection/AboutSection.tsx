import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/public/fontawesome";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { AboutSectionDataType } from "@/app/utils/types/types";
import styles from "./AboutSection.module.css";
import AboutUsHighlights from "./AboutUsHighlights/AboutUsHighlights";
import SectionHeader from "../../Common/SectionHeader/SectionHeader";

type AboutSectionProps = AboutSectionDataType;

const AboutSection: React.FC<AboutSectionProps> = ({ data, textAlignment }) => {
    const {
        title,
        description,
        image,
        highlightsList
    } = data.fields;

    const alignmentClass = textAlignment === "left" ? styles.alignLeft : styles.alignRight;
    const markdownDescription = documentToReactComponents(description);

    return (
        <section id={styles.aboutSectionContainer} className={alignmentClass}>
            <div className={styles.aboutContent}>
                <SectionHeader title={title} />
                <img
                    src={image.fields.file.url}
                    alt="About us Section Image"
                    className={styles.aboutImageMobile}
                />
                <div className={styles.aboutDescription}>
                    {markdownDescription}
                </div>
                <div className={styles.highlights}>
                    {highlightsList && highlightsList.map((highlight) => (
                        <AboutUsHighlights
                            key={highlight.sys.id}
                            title={highlight.fields.title}
                            description={highlight.fields.description}
                            iconUrl={highlight.fields.icon.fields.file.url}
                        />
                    ))}
                </div>
            </div>
            <div>
                <img
                    src={image.fields.file.url}
                    alt="About us Section Image"
                    className={styles.aboutImage}
                />
            </div>
        </section>
    );
};

export default AboutSection;
