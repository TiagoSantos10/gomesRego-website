"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, FreeMode, Scrollbar } from "swiper/modules";
import { MissionSectionType } from "@/app/utils/types/types";
import SectionDescription from "../../Common/SectionDescription/SectionDescription";
import SectionHeader from "../../Common/SectionHeader/SectionHeader";
import MissionCard from "./MissionCard/MissionCard";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import styles from "./MissionContainer.module.css";
import Card from "../../Common/Card/Card";

type MissionContainerProps = {
    missionSectionData: MissionSectionType;
};

const MissionContainer = ({ missionSectionData }: MissionContainerProps) => {
    const {
        title,
        sectionDescription,
        cardTitle,
        cardDescription,
        cardIcon,
        valuesList
    } = missionSectionData.fields;

    return (
        <section id={styles.missionContainer}>
            <SectionHeader title={title} />
            <SectionDescription
                description={sectionDescription}
            />
            <MissionCard
                title={cardTitle}
                description={cardDescription}
                icon={cardIcon.fields.file.url}
            />
            <Swiper
                modules={[A11y, FreeMode, Scrollbar]}
                slidesPerView={4.75}
                freeMode={true}
                scrollbar={{
                    hide: true,
                }}
                style={{ width: "100%", height: "auto", paddingTop: "64px", paddingBottom: "32px" }}
            >
                {
                    valuesList.map((value, index) => (
                        <SwiperSlide key={index} className={styles["swiper-slide"]}>
                            <Card
                                title={value.fields.cardTitle}
                                description={value.fields.cardDescription}
                                cardIcon={value.fields.cardIcon.fields.file.url}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
};

export default MissionContainer;
