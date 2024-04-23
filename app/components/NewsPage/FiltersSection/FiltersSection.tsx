import OptionsSection from "./OptionsSection/OptionsSection";
import SearchInput from "./SearchInput/SearchInput";
import styles from "./FiltersSection.module.css";

const FiltersSection = () => {
    return (
        <div className={styles.filtersSection}>
            <OptionsSection />
            <SearchInput />
        </div>
    );
};

export default FiltersSection;
