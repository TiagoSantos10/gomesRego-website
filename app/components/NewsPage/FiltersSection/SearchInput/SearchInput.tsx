"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../../../../../public/fontawesome";
import useNews from "@/app/utils/hooks";
import { useRef } from "react";
import "./SearchInput.css";

const SearchInput = () => {
    const { setSearch } = useNews();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputSearch = (
        event: React.FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLInputElement>
    ) => {
        event.preventDefault();
        setSearch(inputRef.current?.value || "");
    };

    return (
        <div className="search-input">
            <form onSubmit={handleInputSearch}>
                <input
                    ref={inputRef}
                    className="search-input-bar"
                    type="text"
                    placeholder="Pesquisar..."
                    onBlur={handleInputSearch}
                />
                <button className="submit-btn" type="submit">
                    <FontAwesomeIcon
                        className="search-icon"
                        icon={["fas", "magnifying-glass"]} 
                        size="1x"
                        color="var(--gras-background-blue)"
                    />
                </button>
            </form>
        </div>
    );
};

export default SearchInput;
