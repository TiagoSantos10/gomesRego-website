import { getContactsPage } from "@/services/apis/contentful/contentful";
import ImageContainer from "../components/ContactsPage/ImageContainer/ImageContainer";

const Contacts = async () => {
    const contactsPage = await getContactsPage();
    const {
        contactsPageHeader,
        description,
        button,
        buttonText,
        // officesTitle,
        // officesList,
        // smallEmailTitle,
        // defaultEmail,
        backgroundImage
    } = contactsPage;

    return (
        <section>
            <ImageContainer
                contactsPageHeader={contactsPageHeader}
                description={description}
                button={button}
                buttonText={buttonText}
                image={backgroundImage}
            />
        </section>
    );};

export default Contacts;
