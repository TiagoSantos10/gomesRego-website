import { getHomePage } from "@/services/apis/contentful/contentful";
import CompanyCover from "./components/HomePage/CompanyCover/CompanyCover";
import AboutSection from "./components/HomePage/AboutSection/AboutSection";
import ApproachSection from "./components/HomePage/ApproachSection/ApproachSection";
import PartnersSection from "./components/HomePage/PartnersSection/PartnersSection";

const App = async () => {
    const homePage = await getHomePage();
    
    return (
        <>
            <CompanyCover />
            <AboutSection aboutSection={homePage.aboutSection} textAlignment="left" />
            <ApproachSection sectionHeader={homePage.approachSectionTitle} approachItems={homePage.approachItems} />
            <PartnersSection partners={homePage.partners} />
        </>
    );};

export default App;
