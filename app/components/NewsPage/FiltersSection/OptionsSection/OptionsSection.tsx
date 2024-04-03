import Button from "@/app/components/Common/Button/Button";
import "./OptionsSection.css";

const Options = [
    "Auditoria",
    "Carreiras",
    "Fiscalidade",
    "Economia",
    "Gestão",
    "Formação",
    "Outros"
];

const OptionsSection = () => {
    return (
        <div className="options-section">
            {Options.map((option, index) => (
                <Button key={index} text={option} />
            ))}
        </div>
    );
};

export default OptionsSection;
