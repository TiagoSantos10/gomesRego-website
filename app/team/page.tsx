import PartnerSection from "../components/TeamPage/PartnerSection/PartnerSection";
import person from "../../public/assets/person.png";

const Team = () => {
    return (
        <>
            <PartnerSection
                image={person}
                name="Dulce Gomes"
                description={[
                    "descrição sobre a empresa - Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
                ]}
                email="tiagoserafimsousasantos@gmail.com"
                facebook="https://www.facebook.com/"
                linkedin="https://pt.linkedin.com/"
                imageAlignment="left"
                variant="light"
            />
            <PartnerSection
                image={person}
                name="António Moura e Sá"
                description={[
                    "descrição sobre a empresa - Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
                ]}
                email="tiagoserafimsousasantos@gmail.com"
                facebook="https://www.facebook.com/"
                linkedin="https://pt.linkedin.com/"
                imageAlignment="right"
                variant="dark"
            />
            <PartnerSection
                image={person}
                name="Marianela Rego"
                description={[
                    "descrição sobre a empresa - Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
                ]}
                email="tiagoserafimsousasantos@gmail.com"
                facebook="https://www.facebook.com/"
                linkedin="https://pt.linkedin.com/"
                imageAlignment="left"
                variant="light"
            />
        </>
    );
};

export default Team;
