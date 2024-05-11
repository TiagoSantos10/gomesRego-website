import { OfficeType } from "@/app/utils/types/types";
import Office from "./Office/Office";
import styles from "./ContactsInfoContainer.module.css";

type ContactsInfoContainerProps = {
    officesList: OfficeType[];
    smallEmailTitle: string;
    defaultEmail: string;
};


const ContactsInfoContainer: React.FC<ContactsInfoContainerProps> = ({
    officesList,
    smallEmailTitle,
    defaultEmail
}) => {
    return (
        <div className={styles.container}>
            {officesList.map((office) => (
                <Office
                    key={office.sys.id}
                    officeName={office.fields.officeCity}
                    address={office.fields.adressCode}
                    street={office.fields.street}
                    floorRoom={office.fields.floorRoom}
                />
            ))}
            <p className={styles.smallTitle}>{smallEmailTitle}</p>
            <p className={styles.email}>{defaultEmail}</p>
        </div>
    );
};

export default ContactsInfoContainer;
