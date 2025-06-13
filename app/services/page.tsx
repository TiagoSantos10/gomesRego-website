import { getServicesPage } from "@/services/apis/contentful/contentful";
import ServicesContainer from "../components/ServicesPage/ServicesContainer/ServicesContainer";
import { ServicesPageType, ServicesSectionType } from "../utils/types/types";

const Services = async () => {
    const servicesPageData: ServicesPageType = await getServicesPage();
    const servicesSectionData: ServicesSectionType = servicesPageData.servicesSection;
    
    return (
        <>
            <ServicesContainer
                servicesSectionData={servicesSectionData}
            />
        </>
    );};

export default Services;
