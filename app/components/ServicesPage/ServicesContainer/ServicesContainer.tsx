"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { useEffect, useState } from "react";
import { ServicesSectionType } from "@/app/utils/types/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/manipulation";
import styles from "./ServicesContainer.module.css";
import SectionHeader from "../../Common/SectionHeader/SectionHeader";
import SectionDescription from "../../Common/SectionDescription/SectionDescription";

type SwiperSlideElementType = {
    text: string;
    icon: string;
};

const SwiperSlideElement = ({ text, icon }: SwiperSlideElementType) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemCircle}>
                <img src={icon} alt={text} className={styles.servicesIcon} />
            </div>
            <div className={styles.itemText}>{text}</div>
        </div>
    );
};

type ServicesContainerProps = {
    servicesSectionData: ServicesSectionType;
};

const ServicesContainer: React.FC<ServicesContainerProps> = ({
    servicesSectionData
}) => {
    const [slidesPerView, setSlidesPerView] = useState(5);

    useEffect(() => {
        const windowSize = window.innerWidth;
        const slidesNumber = windowSize < 630 ? 1 : (windowSize < 792 ? 2 : 5);   
        setSlidesPerView(slidesNumber); 
    }, []);

    const {
        title,
        description,
        servicesList
    } = servicesSectionData.fields;

    return (
        <section className={styles.servicesContainer}>
            <SectionHeader title={title} />
            <SectionDescription description={description} />
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                slidesPerView={slidesPerView}
                slidesPerGroup={slidesPerView}
                navigation={true}
                pagination={{ clickable: true }}
                style={{ width: "100%", height: "200px"}}
            >
                {
                    servicesList.map((service, index) => (
                        <SwiperSlide key={index} className={styles["swiper-slide"]}>
                            <SwiperSlideElement
                                text={service.fields.name}
                                icon={service.fields.serviceImage.fields.file.url}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
};

export default ServicesContainer;
