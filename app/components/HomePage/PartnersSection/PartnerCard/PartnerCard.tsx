import Link from "next/link";
import { Almarai } from "next/font/google";
import { PartnersType } from "@/app/utils/types/types";
import styles from "./PartnerCard.module.css";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

const PartnerCard = ({ partner }: { partner: PartnersType }) => {
    const { name, image } = partner.fields;

    return (
        <>
            <div className={styles.desktopCard}>
                <Link href="/team">
                    <img src={image.fields.file.url} alt={name} className={styles.partnerImage} />
                    <div className={styles.partnerName}>{name}</div>
                </Link>
            </div>
            <Link href="/team" className={styles.mobileCard}>
                <img src={image.fields.file.url} alt={name} className={styles.partnerImageMobile} />
                <div className={styles.partnerNameMobileSection}>
                    <h3 className={`${styles.nameMobile} ${almarai.className}`}>{name}</h3>
                    <p className={styles.roleMobile}>Senior Partner</p>
                </div>
            </Link>
        </>
    );
};

export default PartnerCard;
