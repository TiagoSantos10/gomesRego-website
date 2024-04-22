import { getServicesPage } from "@/services/apis/contentful/contentful";
import ActivitySectorsContainer from "../components/ServicesPage/ActivitySectorsContainer/ActivitySectorsContainer";
import ServicesContainer from "../components/ServicesPage/ServicesContainer/ServicesContainer";

const Services = async () => {
    const {
        activitySectorsHeader,
        publicSectorActivities,
        publicSectorImage,
        privateSectorActivities,
        privateSectorImage,
        servicesHeader,
        services
    } = await getServicesPage();
    
    return (
        <>
            <ActivitySectorsContainer
                publicSectorItems={publicSectorActivities}
                publicSectorImage={publicSectorImage}
                sectionHeader={activitySectorsHeader}
                privateSectorItems={privateSectorActivities}
                privateSectorImage={privateSectorImage}
            />
            <ServicesContainer
                services={services}
                sectionHeader={servicesHeader}
            />
        </>
    );};

export default Services;
