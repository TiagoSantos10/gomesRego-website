"use client";

import { Almarai } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { useEffect, useState } from "react";
import { ServicesType } from "@/app/utils/types/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/manipulation";
import styles from "./ServicesContainer.module.css";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

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
    services: ServicesType[];
    sectionHeader: string;
};

const ServicesContainer: React.FC<ServicesContainerProps> = ({
    services,
    sectionHeader
}) => {
    const [slidesPerView, setSlidesPerView] = useState(5);

    useEffect(() => {
        const windowSize = window.innerWidth;
        const slidesNumber = windowSize < 630 ? 1 : (windowSize < 792 ? 2 : 5);   
        setSlidesPerView(slidesNumber); 
    }, []);

    return (
        <section className={styles.servicesContainer}>
            <h1 className={`${almarai.className} section-title`}>{sectionHeader}</h1>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                slidesPerView={slidesPerView}
                slidesPerGroup={slidesPerView}
                navigation={true}
                pagination={{ clickable: true }}
                style={{ width: "100%", height: "200px"}}
            >
                {
                    services.map((service, index) => (
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
