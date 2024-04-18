"use client";

import { useState } from "react";
import { NewsContext } from "@/app/utils/context";
import { NewsContextType, NewsCategoriesType, NewsContentfulResponseType } from "@/app/utils/types/types";

type NewsProviderProps = {
    children: React.ReactNode;
    initialNews: NewsContentfulResponseType[];
    filters: NewsCategoriesType[];
};

const NewsProvider: React.FC<NewsProviderProps> = ({ children, initialNews, filters }) => {
    const [news, setNews] = useState<NewsContextType>({
        filteredNews: initialNews,
        activeFilter: "all"
    });

    const setFilter = (filterId: string) => {
        if (filterId === "all") return setNews({ filteredNews: initialNews, activeFilter: filterId});

        const filteredNews = initialNews.filter((newsItem) => newsItem.fields.category.fields.name === filterId);
        setNews({ filteredNews, activeFilter: filterId });
    };

    const setSearch = (searchTerm: string) => {
        if (searchTerm.length === 0) return setNews({ filteredNews: initialNews, activeFilter: "all" });
    
        const filteredNews = initialNews.filter((newsItem) => newsItem.fields.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setNews({ filteredNews, activeFilter: "all" });
    };

    return (
        <NewsContext.Provider value={{news, setFilter, setSearch, filters}}>
            {children}
        </NewsContext.Provider>
    );
};

export default NewsProvider;
