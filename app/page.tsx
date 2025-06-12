import { getHomePage } from "@/services/apis/contentful/contentful";
import CompanyCover from "./components/HomePage/CompanyCover/CompanyCover";
import PartnersSection from "./components/HomePage/PartnersSection/PartnersSection";
import { AboutSectionDataType, CompanyGuidelinesDataType } from "./utils/types/types";
import AboutSection from "./components/HomePage/AboutSection/AboutSection";
import CompanyGuidelines from "./components/HomePage/CompanyGuidelines/CompanyGuidelines";

const App = async () => {
    const homePage = await getHomePage();
    const aboutData: AboutSectionDataType = {
        data: homePage.aboutSection,
        textAlignment: "left"
    };
    const companyGuidelinesData: CompanyGuidelinesDataType = homePage.guidelines;

    return (
        <>
            <CompanyCover />
            <AboutSection
                data={aboutData.data}
                textAlignment="left"
            />
            <CompanyGuidelines data={companyGuidelinesData} />
            <PartnersSection partners={homePage.partners} />
        </>
    );
};

export default App;
