import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../../../../../../public/fontawesome";
import styles from "./SectorItem.module.css";

type SectorItemProps = {
    text: string;
};

const SectorItem = ({ text }: SectorItemProps) => {
    return (
        <>
            <FontAwesomeIcon
                icon={["far", "circle-check"]}
                size="1x"
                color="var(--gras-purple)"
                className={styles.circleIcon}
            />
            <div>{text}</div>
        </>
    );
};

export default SectorItem;
