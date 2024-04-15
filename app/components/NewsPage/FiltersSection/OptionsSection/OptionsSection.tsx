"use client";

import Button from "@/app/components/Common/Button/Button";
import "./OptionsSection.css";
import useNews from "@/app/utils/hooks";

const Options = [
    "Auditoria",
    "Carreira",
    "Fiscalidade",
    "Economia",
    "Gestão",
    "Formação",
    "Outros"
];

const OptionsSection = () => {
    const { news, setFilter } = useNews();

    const handleButtonClick = (option: string) => {
        if (option === news.activeFilter) return setFilter("all");

        setFilter(option);
    };

    return (
        <div className="options-section">
            {Options.map((option, index) => (
                <Button
                    key={index}
                    text={option}
                    onClick={() => handleButtonClick(option)}
                    isSelected={option === news.activeFilter}    
                />
            ))}
        </div>
    );
};

export default OptionsSection;
