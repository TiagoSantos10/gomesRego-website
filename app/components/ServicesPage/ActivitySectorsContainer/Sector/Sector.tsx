"use client";

import { useEffect, useRef } from "react";
import { Almarai } from "next/font/google";
import { ImageType } from "@/app/utils/types/types";
import SectorItem from "./SectorItem/SectorItem";
import styles from "./Sector.module.css";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

type SectorProps = {
    title: string;
    items: string[];
    imageAlignment: "left" | "right";
    image: ImageType;
};

const Sector = ({ title, items, imageAlignment, image }: SectorProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const alignmentClass = `align-${imageAlignment}`;

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
        <div ref={divRef} className={`${styles.sectorContainer} ${styles[alignmentClass]}`}>
            <div className={styles.sectorContent}>
                <h3 className={`${almarai.className} ${styles.headingTitle}`}>{title}</h3>
                {
                    items.map((item, index) => (
                        <div className={styles.sectorItem} key={index}>
                            <SectorItem text={item} />
                        </div>
                    ))
                }
            </div>
            <div className={styles.sectorImage}>
                <img className={styles.publicImg} src={image.fields.file.url} alt={title} />
            </div>
        </div>
    );
};

export default Sector;
