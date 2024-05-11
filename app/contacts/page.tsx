import { getContactsPage } from "@/services/apis/contentful/contentful";
import ImageContainer from "../components/ContactsPage/ImageContainer/ImageContainer";
import ContactsInfoContainer from "../components/ContactsPage/ContactsInfoContainer/ContactsInfoContainer";

const Contacts = async () => {
    const contactsPage = await getContactsPage();
    const {
        contactsPageHeader,
        description,
        button,
        buttonText,
        officesList,
        smallEmailTitle,
        defaultEmail,
        backgroundImage
    } = contactsPage;

    return (
        <section style={{display: "flex", flexGrow: 1}}>
            <ImageContainer
                contactsPageHeader={contactsPageHeader}
                description={description}
                button={button}
                buttonText={buttonText}
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
