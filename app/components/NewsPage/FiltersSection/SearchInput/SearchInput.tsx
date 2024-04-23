"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../../../../../public/fontawesome";
import { useRef } from "react";
import useNews from "@/app/utils/hooks";
import styles from "./SearchInput.module.css";

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
        <div className={styles.searchInput}>
            <form onSubmit={handleInputSearch} className={styles.form}>
                <input
                    ref={inputRef}
                    className={styles.searchInputBar}
                    type="text"
                    placeholder="Pesquisar..."
                    onBlur={handleInputSearch}
                />
                <button className={styles.submitBtn} type="submit">
                    <FontAwesomeIcon
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
