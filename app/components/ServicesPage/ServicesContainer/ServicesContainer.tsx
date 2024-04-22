"use client";

import { Almarai } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { ServicesType } from "@/app/utils/types/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/manipulation";
import "./ServicesContainer.css";

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
        <div className="item">
            <div className="item-circle">
                <img src={icon} alt={text} className="services-icon" />
            </div>
            <div className="item-text">{text}</div>
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
    return (
        <section className="services-container">
            <h1 className={`${almarai.className} section-title`}>{sectionHeader}</h1>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                slidesPerView={5}
                slidesPerGroup={5}
                navigation={true}
                pagination={{ clickable: true }}
                style={{ width: "100%", height: "200px"}}
            >
                {
                    services.map((service, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
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
