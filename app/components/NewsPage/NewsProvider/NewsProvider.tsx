"use client";

import { useState } from "react";
import { NewsContext } from "@/app/utils/context";
import news from "@/app/utils/dummy/news";
import { NewsType } from "@/app/utils/types/types";

type NewsProviderProps = {
    children: React.ReactNode;
};

const NewsProvider: React.FC<NewsProviderProps> = ({ children }) => {
    const [newsList, setNewsList] = useState<NewsType[]>(news);
    return (
        <NewsContext.Provider value={{newsList, setNewsList}}>
            {children}
        </NewsContext.Provider>
    );
};

export default NewsProvider;
