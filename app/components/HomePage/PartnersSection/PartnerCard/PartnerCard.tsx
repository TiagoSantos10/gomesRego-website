import { Almarai } from "next/font/google";
import { PartnersType } from "@/app/utils/types/types";
import styles from "./PartnerCard.module.css";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: ["400", "700"]
});

const PartnerCard = ({ partner }: { partner: PartnersType }) => {
    const { name, image, role, introduction } = partner.fields;

    return (
        <div className={styles.partnerCard}>
            <img
                src={image.fields.file.url}
                alt={name}
                className={styles.partnerImage}
            />
            <div className={styles.partnerInfo}>
                <span className={`${almarai.className} ${styles.partnerName}`}>{name}</span>
                <span className={styles.partnerRole}>{role}</span>
                <span className={styles.partnerDescription}>{introduction}</span>
            </div>
        </div>
    );
};

export default PartnerCard;
