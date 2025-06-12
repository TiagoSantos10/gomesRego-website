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

    return (
        <>
            <AboutSection
                data={aboutData.data}
                textAlignment="left"
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
