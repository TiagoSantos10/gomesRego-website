import { getContactsPage } from "@/services/apis/contentful/contentful";
import ImageContainer from "../components/ContactsPage/ImageContainer/ImageContainer";
import ContactsInfoContainer from "../components/ContactsPage/ContactsInfoContainer/ContactsInfoContainer";
import styles from "./Contacts.module.css";

const Contacts = async () => {
    const contactsPage = await getContactsPage();
    const {
        contactsPageHeader,
        description,
        officesList,
        smallEmailTitle,
        defaultEmail,
        backgroundImage
    } = contactsPage;

    return (
        <section className={styles.section}>
            <ImageContainer
                contactsPageHeader={contactsPageHeader}
                description={description}
                image={backgroundImage}
            />
            <ContactsInfoContainer
                officesList={officesList}
                smallEmailTitle={smallEmailTitle}
                defaultEmail={defaultEmail}
            />
        </section>
    );};

export default Contacts;
