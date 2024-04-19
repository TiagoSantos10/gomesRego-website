"use client";

import { useEffect, useRef } from "react";
import { Almarai } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../../../../public/fontawesome";
import "./PartnerSection.css";

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

    useEffect(() => {
        if (!divRef.current) return;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && divRef.current) {
                    divRef.current.classList.add("slide-in");
                    observer.unobserve(divRef.current);
                }
            });
        });

        observer.observe(divRef.current);
    }, []);

    return (
        <div ref={divRef} className={`partner-section align-${imageAlignment} background-${variant}`}>
            <div className="partner-image">
                <img src={image} alt={name} />
            </div>
            <div className="partner-content">
                <h1 className={almarai.className}>{name}</h1>
                <div className="content-description">
                    <ul>
                        {description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                </div>
                <div className="partner-socials">
                    <a href={`mailto:${email}`} target="_blank">
                        <FontAwesomeIcon icon={["fas", "envelope-square"]} size="2xl" color={socialsBackgroundColor} />
                    </a>
                    <a href={facebook} target="_blank">
                        <FontAwesomeIcon icon={["fab", "facebook-square"]} size="2xl" color={socialsBackgroundColor} />
                    </a>
                    <a href={linkedin} target="_blank">
                        <FontAwesomeIcon icon={["fab", "linkedin"]} size="2xl" color={socialsBackgroundColor} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PartnerSection;
