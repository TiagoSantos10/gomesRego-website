"use client";

import { useRef } from "react";
import { AboutSectionDataType, ApproachSectionDataType } from "@/app/utils/types/types";
import AboutSection from "../AboutSection/AboutSection";
import ApproachSection from "../ApproachSection/ApproachSection";

type AboutApproachSectionsProps = {
    approachData: ApproachSectionDataType;
    aboutData: AboutSectionDataType;
};

const AboutApproachSections: React.FC<AboutApproachSectionsProps> = ({ approachData, aboutData }) => {
    const approachSectionRef = useRef<HTMLDivElement>(null);
    const onApproachItemClick = () => {
        if (!approachSectionRef.current) {
            return;
        }
        
        const headerOffset = 65;
        const offsetPosition = approachSectionRef.current?.offsetTop - headerOffset;
  
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    };

    return (
        <>
            <AboutSection
                data={aboutData.data}
                textAlignment="left"
                onApproachItemClick={onApproachItemClick} 
            />
            <ApproachSection
                sectionHeader={approachData.sectionHeader}
                approachItems={approachData.approachItems}
                myRef={approachSectionRef}
            />
        </>
    );
};

export default AboutApproachSections;
