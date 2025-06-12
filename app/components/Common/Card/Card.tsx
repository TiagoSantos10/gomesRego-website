import styles from "./Card.module.css";

type CardProps = {
    title: string;
    description: string;
    cardIcon: string;
};

const Card = ({ title, description, cardIcon }: CardProps) => {
    return (
        <div id={styles.cardContainer}>
            <div className={styles.cardCircle}>
                <img
                    src={cardIcon}
                    className={styles.cardIcon}
                    alt={title || "Card Icon"}
                />
            </div>
            <div className={styles.cardContent}>
                <span className={styles.cardTitle}>{title}</span>
                <p className={styles.cardDescription}>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;
