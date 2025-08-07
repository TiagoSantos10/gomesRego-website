import { getContactsPage } from "@/services/apis/contentful/contentful";
import styles from "./Contacts.module.css";
import SectionHeader from "../components/Common/SectionHeader/SectionHeader";
import SectionDescription from "../components/Common/SectionDescription/SectionDescription";
import ContactsCard from "../components/ContactsPage/ContactsCard/ContactsCard";
import { OfficeType } from "../utils/types/types";
import StickyButton from "../components/StickyButton/StickyButton";

const Contacts = async () => {
    const contactsPage = await getContactsPage();
    const {
        contactsPageHeader,
        description,
        officesList,
    } = contactsPage;

    return (
        <section className={styles.section}>
            <SectionHeader title={contactsPageHeader} />
            <SectionDescription description={description} />
            <div className={styles.cardsContainer}>
                {officesList.map((office: OfficeType) => (
                    <ContactsCard key={office.sys.id} office={office} />
                ))}
            </div>
            <StickyButton />
        </section>
    );
};

export default Contacts;
