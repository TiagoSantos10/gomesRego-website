import { ApproachItemType } from "@/app/utils/types/types";
import styles from "./ApproachItem.module.css";

type ApproachItemProps = {
    item : ApproachItemType;
};

const ApproachItem: React.FC<ApproachItemProps> = ({ item }) => {
    const { title, description, itemIcon } = item.fields;
    const { url } = itemIcon.fields.file;

    return (
        <div className={styles.item}>
            <div className={styles.itemIcon}>
                <div className={styles.itemCircle}>
                    <img src={url} alt={item.sys.id} />
                </div>
            </div>
            <div className={styles.itemContent}>
                <div className={styles.itemTitle}>{title}</div>
                <div className={styles.itemDescription}>
                    {description}
                </div>
            </div>
        </div>
    );
};

export default ApproachItem;
