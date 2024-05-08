import { Almarai } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/public/fontawesome";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Link from "next/link";
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
                    <li className={styles.listItem}>
                        <FontAwesomeIcon
                            icon={["fas", "arrow-right"]}
                            size="1x"
                            color="var(--gras-purple)"
                            className={styles.faIcon}
                        />
                        <Link className={styles.a} href="#approach">A nossa abordagem</Link>
                    </li>
                    <li className={styles.listItem}>
                        <FontAwesomeIcon
                            icon={["fas", "arrow-right"]}
                            size="1x"
                            color="var(--gras-purple)"
                            className={styles.faIcon}
                        />
                        <Link className={styles.a} href="/services">Os nossos serviços</Link>
                    </li>
                    <li className={styles.listItem}>
                        <FontAwesomeIcon
                            icon={["fas", "arrow-right"]}
                            size="1x"
                            color="var(--gras-purple)"
                            className={styles.faIcon}
                        />
                        <Link className={styles.a} href="/contacts">Os nossos escritórios</Link>
                    </li>
                </ul>
            </div>
            <div>
                <img
                    src={image.fields.file.url}
                    alt="About us Section Image"
                    className={styles.aboutImage}
                />
            </div>
        </section>
    );};

export default AboutSection;
