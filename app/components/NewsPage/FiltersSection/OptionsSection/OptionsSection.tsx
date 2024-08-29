"use client";

import * as ScrollArea from "@radix-ui/react-scroll-area";
import Button from "@/app/components/Common/Button/Button";
import useNews from "@/app/utils/hooks";
import { NewsCategoriesType } from "@/app/utils/types/types";
import styles from "./OptionsSection.module.css";

const OptionsSection = () => {
    const { news, setFilter, filters } = useNews();

    const handleButtonClick = (option: string) => {
        if (option === news.activeFilter) return setFilter("all");

        setFilter(option);
    };

    return (
        <>
            <ScrollArea.Root className={styles.scrollAreaRoot}>
                <ScrollArea.Viewport>
                    <div className={styles.optionsSection}>
                        {filters.map((option: NewsCategoriesType, index: number) => (
                            <Button
                                key={index}
                                text={option.fields.name}
                                onClick={() => handleButtonClick(option.fields.name)}
                                isSelected={option.fields.name === news.activeFilter}    
                            />
                        ))}
                    </div>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="horizontal">
                    <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>
            <div className={styles.desktop}>
                <div className={styles.optionsSection}>
                    {filters.map((option: NewsCategoriesType, index: number) => (
                        <Button
                            key={index}
                            text={option.fields.name}
                            onClick={() => handleButtonClick(option.fields.name)}
                            isSelected={option.fields.name === news.activeFilter}    
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default OptionsSection;
