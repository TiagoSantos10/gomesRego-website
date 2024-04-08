"use client";

import useNews from "@/app/utils/hooks";
import News from "./News/News";
import { NewsType } from "@/app/utils/types/types";

const NewsList = () => {
    const news = useNews();

    return (
        <>
            {news.newsList.map((newsItem: NewsType) => (
                <News key={newsItem.id} newsItem={newsItem} />
            ))}
        </>
    );
};

export default NewsList;
