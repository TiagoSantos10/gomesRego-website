import styles from "./CardTitle.module.css";

type CardTitleProps = {
    title: string;
};

const CardTitle = ({ title }: CardTitleProps) => (
    <span className={styles.cardTitle}>{title}</span>
);

export default CardTitle;
