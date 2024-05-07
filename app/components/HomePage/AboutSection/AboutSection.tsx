import { Almarai } from "next/font/google";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import styles from "./AboutSection.module.css";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

type AboutSectionProps = {
    aboutSection: {
        sys: {
            id: string;
        },
        fields: {
            title: string;
            description: {
                nodeType: BLOCKS.DOCUMENT;
                data: {};
                content: [];
            };
            smallTitle: string;
            workList: string[];
            image: {
                sys: {
                    id: string;
                },
                fields: {
                    file: {
                        url: string;
                    };
                };
            }
        };
    };
    textAlignment: "left" | "right";
};

const AboutSection: React.FC<AboutSectionProps> = ({ aboutSection, textAlignment }) => {
    const {
        title,
        description,
        smallTitle,
        image
    } = aboutSection.fields;

    const alignmentClass = textAlignment === "left" ? styles.alignLeft : styles.alignRight;
    const markdownDescription = documentToReactComponents(description);

    return (
        <section id={styles.aboutSectionContainer} className={alignmentClass}>
            <div className={styles.aboutContent}>
                <h1 className={`${almarai.className} ${styles.bigTitle}`}>{title}</h1>
                <div className={styles.aboutDescription}>
                    {markdownDescription}
                </div>
                <h3 className={`${almarai.className} ${styles.smallTitle}`}>{smallTitle}</h3>
                <ul className={styles.workList}>
                    <li className={styles.listItem}><a className={styles.a} href="/#approach">Como atuamos</a></li>
                    <li className={styles.listItem}><a className={styles.a} href="/services">Onde atuamos</a></li>
                    <li className={styles.listItem}><a className={styles.a} href="/contacts">Onde estamos</a></li>
                </ul>
            </div>
            <div className={styles.aboutImageContainer}>
                <img
                    src={image.fields.file.url}
                    alt="About us Section Image"
                    className={styles.aboutImage}
                />
            </div>
        </section>
    );};

export default AboutSection;
