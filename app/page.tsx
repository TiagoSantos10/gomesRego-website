import Navbar from "./components/Navbar/Navbar";
import CompanyCover from "./components/HomePage/CompanyCover/CompanyCover";
import AboutSection from "./components/HomePage/AboutSection/AboutSection";
import ApproachSection from "./components/HomePage/ApproachSection/ApproachSection";
import PartnersSection from "./components/HomePage/PartnersSection/PartnersSection";
import Footer from "./components/Footer/Footer";

const App = () => (
    <div>
        <Navbar />
        <CompanyCover />
        <AboutSection />
        <ApproachSection />
        <PartnersSection />
        <Footer />
    </div>
);

export default App;
