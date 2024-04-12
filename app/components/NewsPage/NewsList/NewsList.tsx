"use client";

import useNews from "@/app/utils/hooks";
import News from "./News/News";
import { NewsType } from "@/app/utils/types/types";
import HighlightedNews from "./HighlightedNews/HighlightedNews";
import "./NewsList.css";

const NewsList = () => {
    const { news } = useNews();
    let highlightedNews = null;
    let remainingNews = null;

    if (news.activeFilter === "all") {
        const highlightedIndex = news.filteredNews.findIndex(
            (newsItem: NewsType) => newsItem.highlighted
        );
        highlightedNews = highlightedIndex !== -1 ? news.filteredNews[highlightedIndex] : null;
        remainingNews = news.filteredNews.filter((_news: NewsType, index: number) => index !== highlightedIndex);
    } else {
        remainingNews = news.filteredNews;
    }

    return (
        <div className="news-list">
            {highlightedNews && <HighlightedNews highlightedNews={highlightedNews} />}
            {remainingNews && remainingNews.map((newsItem: NewsType) => (
                <News key={newsItem.id} newsItem={newsItem} />
            ))}
        </div>
    );
};

export default NewsList;
