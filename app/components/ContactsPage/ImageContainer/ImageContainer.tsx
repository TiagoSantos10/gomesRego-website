"use client";

import { Almarai } from "next/font/google";
import { ImageType } from "@/app/utils/types/types";
import styles from "./ImageContainer.module.css";
import Button from "../../Common/Button/Button";

type ImageContainerProps = {
    contactsPageHeader: string;
    description: string;
    button: string;
    buttonText: string;
    image: ImageType;
};

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

const ImageContainer: React.FC<ImageContainerProps> = ({
    contactsPageHeader,
    description,
    button,
    buttonText,
    image
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={image.fields.file.url} alt={contactsPageHeader} className={styles.bgImage} />
            </div>
            <div className={styles.content}>
                <div className={styles.headerContent}>
                    <div className={styles.stylingBar} />
                    <h1 className={`${almarai.className} ${styles.header}`}>{contactsPageHeader}</h1>
                </div>
                <p className={styles.description}>{description}</p>
                {button && (
                    <div className={styles.buttonContainer}>
                        <Button
                            text={buttonText}
                            size="medium"
                            onClick={() => {
                                location.href="mailto:tiagoserafimsousasantos@gmail.com";
                            }}
                            variant="light"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageContainer;
