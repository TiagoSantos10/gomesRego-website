import { OfficeType } from "@/app/utils/types/types";
import styles from "./ContactsCard.module.css";
import CardTitle from "../../Common/CardTitle/CardTitle";
import CardInfo from "../../Common/CardInfo/CardInfo";

type ContactsCardProps = {
    office: OfficeType;
};

const ContactsCard = ({ office }: ContactsCardProps) => {
    const {
        officeCity,
        location,
        phoneNumber,
        timetable,
        image
    } = office.fields;

    return (
        <div className={styles.card}>
            <img
                src={image.fields.file.url}
                alt={image.fields.title}
                className={styles.image}
            />
            <span className={styles.infoContainer}>
                <CardTitle title={officeCity} />
                <CardInfo
                    text={location}
                    phoneNumber={phoneNumber}
                    timetable={timetable}
                />
            </span>
        </div>
    );
};

export default ContactsCard;
