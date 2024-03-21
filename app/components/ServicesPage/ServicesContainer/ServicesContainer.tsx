"use client";

import { Almarai } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
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
    text: string
};

const SwiperSlideElement = ({ text }: SwiperSlideElementType) => {
    return (
        <div className="item">
            <div className="item-circle" />
            <div className="item-text">{text}</div>
        </div>
    );
};

const ServicesContainer = () => {
    return (
        <div className="services-container">
            <h1 className={almarai.className}>Serviços</h1>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                slidesPerView={5}
                slidesPerGroup={5}
                navigation={true}
                pagination={{ clickable: true }}
                style={{ width: "80%", height: "200px"}}
            >
                <SwiperSlide className="swiper-slide">
                    <SwiperSlideElement text="Consultoria Contabilistica" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <SwiperSlideElement text="Consultoria Fiscal" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <SwiperSlideElement text="Corporate Financeiro" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <SwiperSlideElement text="Controlo Interno" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <SwiperSlideElement text="Auditoria de Contas" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <SwiperSlideElement text="Revisão Legal de Contas" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <SwiperSlideElement text="Due Diligence" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <SwiperSlideElement text="Projetos de Investimento" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <SwiperSlideElement text="Formação nas Áreas Especificas de Atividade" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <SwiperSlideElement text="Avaliação e Reestruturação de Empresas" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ServicesContainer;
