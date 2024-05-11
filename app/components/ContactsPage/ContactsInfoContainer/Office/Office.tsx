import styles from "./Office.module.css";

type OfficeProps = {
    officeName: string;
    address: string;
    street: string;
    floorRoom: string;
};

const Office: React.FC<OfficeProps> = ({
    officeName,
    address,
    street,
    floorRoom
}) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{officeName}</h3>
            <p className={styles.localization}>{street}</p>
            <p className={styles.localization}>{floorRoom}</p>
            <p className={styles.localization}>{address}</p>
        </div>
    );
};

export default Office;
