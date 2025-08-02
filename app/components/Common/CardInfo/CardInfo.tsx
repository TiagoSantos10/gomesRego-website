import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "./CardInfo.module.css";

type CardInfoProps = {
    text: string | {
        nodeType: BLOCKS.DOCUMENT;
        data: {};
        content: [];
    };
    phoneNumber?: string;
    timetable: string | {
        nodeType: BLOCKS.DOCUMENT;
        data: {};
        content: [];
    };
};

const CardInfo = ({
    text,
    phoneNumber,
    timetable
}: CardInfoProps) => {
    let markdownLocation;
    let markdownTimetable;
    if (typeof (text) !== "string")
        markdownLocation = documentToReactComponents(text);
    if (typeof (timetable) !== "string")
        markdownTimetable = documentToReactComponents(timetable);

    return (
        <div className={styles.cardInfoContainer}>
            <span className={styles.cardInfo}>
                <FontAwesomeIcon
                    icon={["fas", "location-dot"]}
                    size="1x"
                    color="var(--gras-titles-blue)"
                />
                <div className={styles.textInfo}>{markdownLocation}</div>
            </span>
            <span className={styles.cardInfo}>
                <FontAwesomeIcon
                    icon={["fas", "phone"]}
                    size="1x"
                    color="var(--gras-titles-blue)"
                />
                <div className={styles.textInfo}><p>{phoneNumber}</p></div>
            </span>
            <span className={styles.cardInfo}>
                <FontAwesomeIcon
                    icon={["fas", "clock"]}
                    size="1x"
                    color="var(--gras-titles-blue)"
                />
                <div className={styles.textInfo}>{markdownTimetable}</div>
            </span>
        </div>
    );
};

export default CardInfo;
