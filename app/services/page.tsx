import { getServicesPage } from "@/services/apis/contentful/contentful";
import ServicesContainer from "../components/ServicesPage/ServicesContainer/ServicesContainer";
import { ServicesPageType, ServicesSectionType } from "../utils/types/types";
import MissionContainer from "../components/ServicesPage/MissionContainer/MissionContainer";

const Services = async () => {
    const servicesPageData: ServicesPageType = await getServicesPage();
    const servicesSectionData: ServicesSectionType = servicesPageData.servicesSection;
    const missionSectionData = servicesPageData.missionSection;
    
    return (
        <>
            <ServicesContainer
                servicesSectionData={servicesSectionData}
            />
            <MissionContainer
                missionSectionData={missionSectionData}
            />
        </>
    );};

export default Services;
