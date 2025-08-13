"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Autoplay } from "swiper/modules";
import { ImageType } from "@/app/utils/types/types";
import styles from "./CompanyCover.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/manipulation";
import Button from "../../Common/Button/Button";

type CompanyCoverProps = {
    heroImages?: ImageType[];
};

const CompanyCover = ({ heroImages }: CompanyCoverProps) => (
    <section className={styles.companyCoverSection}>
        <Swiper
            modules={[Navigation, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
            {
                heroImages?.map((image) => (
                    <SwiperSlide key={image.sys.id}>
                        <div className={styles.imageContainer}>
                            <img src={image?.fields?.file?.url || ""} alt={image?.fields?.title || "Hero Image"} className={styles.coverImage} />
                            <div className={styles.contentOverlay}>
                                <h1 className={styles.overlayTitle}>
                                    {"Gomes Rego & Associados SROC"}
                                </h1>
                                <p className={styles.overlayText}>
                                    Há mais de cinco anos a desenvolver trabalhos de auditoria com rigor, qualidade e independência, assegurando transparência na informação financeira e criando valor acrescentado para clientes
                                </p>
                                <Button
                                    onClick={() => {
                                        const aboutSection = document.getElementById("about-section");
                                        if (aboutSection) {
                                            aboutSection.scrollIntoView({ behavior: "smooth", block: "center" });
                                        }
                                    }}
                                    text="Saber mais"
                                    variant="light"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </section>
);

export default CompanyCover;
