"use client";

import useNews from "@/app/utils/hooks";
// import News from "./News/News";
// import { NewsType } from "@/app/utils/types/types";
import "./NewsList.css";
import HighlightedNews from "./HighlightedNews/HighlightedNews";

const NewsList = () => {
    const news = useNews();

    return (
        <div className="news-list">
            <HighlightedNews highlightedNews={news.newsList[0]} />
            {/* {news.newsList.map((newsItem: NewsType) => (
                <News key={newsItem.id} newsItem={newsItem} />
            ))} */}
        </div>
    );
};

export default NewsList;
