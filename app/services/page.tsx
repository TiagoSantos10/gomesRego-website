import { getServicesPage } from "@/services/apis/contentful/contentful";
import ServicesContainer from "../components/ServicesPage/ServicesContainer/ServicesContainer";
import { ServicesPageType, ServicesSectionType } from "../utils/types/types";
import MissionContainer from "../components/ServicesPage/MissionContainer/MissionContainer";
import PurposeContainer from "../components/ServicesPage/PurposeContainer/PurposeContainer";

const Services = async () => {
    const servicesPageData: ServicesPageType = await getServicesPage();
    const servicesSectionData: ServicesSectionType = servicesPageData.servicesSection;
    const missionSectionData = servicesPageData.missionSection;
    const purposeSectionData = servicesPageData.purposeSection;
    
    return (
        <>
            <ServicesContainer
                servicesSectionData={servicesSectionData}
            />
            <MissionContainer
                missionSectionData={missionSectionData}
            />
            <PurposeContainer
                purposeSectionData={purposeSectionData}
            />
        </>
    );};

export default Services;
