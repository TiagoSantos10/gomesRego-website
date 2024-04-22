"use client";

import { useEffect, useRef } from "react";
import { Almarai } from "next/font/google";
import { NewsImageType } from "@/app/utils/types/types";
import SectorItem from "./SectorItem/SectorItem";
import "./Sector.css";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

type SectorProps = {
    title: string;
    items: string[];
    imageAlignment: "left" | "right";
    image: NewsImageType;
};

const Sector = ({ title, items, imageAlignment, image }: SectorProps) => {
    const divRef = useRef<HTMLDivElement>(null);

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
        <div ref={divRef} className={`sector-container align-${imageAlignment}`}>
            <div className="sector-content">
                <h3 className={almarai.className}>{title}</h3>
                {
                    items.map((item, index) => (
                        <SectorItem key={index} text={item} />
                    ))
                }
            </div>
            <div className="sector-image">
                <img className="public-img" src={image.fields.file.url} alt={title} />
            </div>
        </div>
    );
};

export default Sector;
