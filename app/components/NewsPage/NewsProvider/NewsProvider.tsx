"use client";

import { useState } from "react";
import { NewsContext } from "@/app/utils/context";
import { NewsType, NewsContextType } from "@/app/utils/types/types";

type NewsProviderProps = {
    children: React.ReactNode;
    initialNews: NewsType[];
};

const NewsProvider: React.FC<NewsProviderProps> = ({ children, initialNews }) => {
    const [news, setNews] = useState<NewsContextType>({
        filteredNews: initialNews,
        activeFilter: "all"
    });

    const setFilter = (filterId: string) => {
        if (filterId === "all") return setNews({ filteredNews: initialNews, activeFilter: filterId});

        const filteredNews = initialNews.filter((newsItem) => newsItem.category === filterId);
        setNews({ filteredNews, activeFilter: filterId });
    };

    const setSearch = (searchTerm: string) => {
        if (searchTerm.length === 0) return setNews({ filteredNews: initialNews, activeFilter: "all" });
    
        const filteredNews = initialNews.filter((newsItem) => newsItem.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setNews({ filteredNews, activeFilter: "all" });
    };

    return (
        <NewsContext.Provider value={{news, setFilter, setSearch}}>
            {children}
        </NewsContext.Provider>
    );
};

export default NewsProvider;
