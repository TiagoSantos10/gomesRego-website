import { Almarai } from "next/font/google";
import styles from "./SectionHeader.module.css";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

type SectionHeaderProps = {
    title: string;
};

const SectionHeader = ({ title }: SectionHeaderProps) => {
    return (
        <h1 className={`${almarai.className} ${styles.bigTitle}`}>{title}</h1>
    );
};

export default SectionHeader;
