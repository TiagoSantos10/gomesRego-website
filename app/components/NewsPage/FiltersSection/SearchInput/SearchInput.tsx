import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../../../../../public/fontawesome";
import "./SearchInput.css";

const SearchInput = () => {
    return (
        <div className="search-input">
            <input type="text" placeholder="Pesquisar..." />
            <FontAwesomeIcon className="search-icon" icon={["fas", "magnifying-glass"]} size="1x" color="var(--gras-background-blue)" />
        </div>
    );
};

export default SearchInput;
