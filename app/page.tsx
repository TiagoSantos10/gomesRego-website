import { getHomePage } from "@/services/apis/contentful/contentful";
import CompanyCover from "./components/HomePage/CompanyCover/CompanyCover";
import PartnersSection from "./components/HomePage/PartnersSection/PartnersSection";
import AboutApproachSections from "./components/HomePage/AboutAproachSections/AboutApproachSections";
import { AboutSectionDataType } from "./utils/types/types";

const App = async () => {
    const homePage = await getHomePage();
    const approachData = {
        sectionHeader: homePage.approachSectionTitle,
        approachItems: homePage.approachItems
    };
    const aboutData: AboutSectionDataType = {
        data: homePage.aboutSection,
        textAlignment: "left"
    };
    
    return (
        <>
            <CompanyCover />
            <AboutApproachSections approachData={approachData} aboutData={aboutData} />
            <PartnersSection partners={homePage.partners} />
        </>
    );};

export default App;
