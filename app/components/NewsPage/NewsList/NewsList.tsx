"use client";

import useNews from "@/app/utils/hooks";
import News from "./News/News";
import { NewsType } from "@/app/utils/types/types";
import "./NewsList.css";

const NewsList = () => {
    const news = useNews();

    return (
        <div className="news-list">
            {news.newsList.map((newsItem: NewsType) => (
                <News key={newsItem.id} newsItem={newsItem} />
            ))}
        </div>
    );
};

export default NewsList;
