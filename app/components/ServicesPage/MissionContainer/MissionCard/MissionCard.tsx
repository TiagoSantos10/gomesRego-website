import CardTitle from "@/app/components/Common/CardTitle/CardTitle";
import styles from "./MissionCard.module.css";

type MissionCardProps = {
    title: string;
    description: string;
    icon: string;
};

const MissionCard = ({
    title,
    description,
    icon
}: MissionCardProps) => (
    <div className={styles.card}>
        <div className={styles.cardCircle}>
            <img
                src={icon}
                className={styles.cardIcon}
                alt={title || "Card Icon"}
            />
        </div>
        <div className={styles.content}>
            <CardTitle title={title} />
            <span className={styles.description}>
                {description}
            </span>
        </div>
    </div>
);

export default MissionCard;
