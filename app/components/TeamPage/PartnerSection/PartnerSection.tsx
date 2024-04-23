"use client";

import { useEffect, useRef } from "react";
import { Almarai } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../../../../public/fontawesome";
import styles from "./PartnerSection.module.css";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

type PartnerSectionProps = {
    image: string;
    name: string;
    description: string[];
    email: string;
    facebook: string;
    linkedin: string;
    imageAlignment: "left" | "right";
    variant: "light" | "dark";
};

const PartnerSection = ({
    image, name, description, email, facebook, linkedin, imageAlignment, variant
}: PartnerSectionProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const socialsBackgroundColor = variant === "light" ? "var(--gras-background-blue)" : "var(--gras-beige)";
    const alignmentClass = imageAlignment === "left" ? styles.alignLeft : styles.alignRight;
    const backgroundClass = variant === "light" ? styles.lightBackground : styles.backgroundDark;

    useEffect(() => {
        if (!divRef.current) return;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && divRef.current) {
                    divRef.current.classList.add(styles.slideIn);
                    observer.unobserve(divRef.current);
                }
            });
        });

        observer.observe(divRef.current);
    }, []);

    return (
        <div ref={divRef} className={`${styles.partnerSection} ${alignmentClass} ${backgroundClass}`}>
            <div className={styles.partnerImageContainer}>
                <img src={image} alt={name} className={styles.image} />
            </div>
            <div className={styles.partnerContent}>
                <h1 className={`${almarai.className} ${styles.headingTitle}`}>{name}</h1>
                <div className={styles.contentDescription}>
                    <ul className={styles.unorderedList}>
                        {description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.partnerSocials}>
                    <a href={`mailto:${email}`} target="_blank" className={styles.anchor}>
                        <FontAwesomeIcon icon={["fas", "envelope-square"]} size="2xl" color={socialsBackgroundColor} />
                    </a>
                    <a href={facebook} target="_blank" className={styles.anchor}>
                        <FontAwesomeIcon icon={["fab", "facebook-square"]} size="2xl" color={socialsBackgroundColor} />
                    </a>
                    <a href={linkedin} target="_blank" className={styles.anchor}>
                        <FontAwesomeIcon icon={["fab", "linkedin"]} size="2xl" color={socialsBackgroundColor} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PartnerSection;
