import Link from "next/link";
import { PartnersType } from "@/app/utils/types/types";
import styles from "./PartnerCard.module.css";

const PartnerCard = ({ partner }: { partner: PartnersType }) => {
    const { name, image } = partner.fields;

    return (
        <Link className={styles.partnerCard} href="/team">
            <img src={image.fields.file.url} alt={name} className={styles.partnerImage} />
            <div className={styles.partnerName}>{name}</div>
        </Link>
    );
};

export default PartnerCard;
