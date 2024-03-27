"use client";

import { useEffect, useRef } from "react";
import { Almarai } from "next/font/google";
import SectorItem from "./SectorItem/SectorItem";
import "../../../../animations/animations.css";
import "./Sector.css";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

type SectorProps = {
    title: string;
    items: string[];
    imageAlignment: "left" | "right";
};

const Sector = ({ title, items, imageAlignment }: SectorProps) => {
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
                <div className="public-img" />
            </div>
        </div>
    );
};

export default Sector;
