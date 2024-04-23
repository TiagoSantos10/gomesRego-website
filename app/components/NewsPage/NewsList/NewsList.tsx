"use client";

import useNews from "@/app/utils/hooks";
import { NewsContentfulResponseType, NewsType } from "@/app/utils/types/types";
import News from "./News/News";
import HighlightedNews from "./HighlightedNews/HighlightedNews";
import styles from "./NewsList.module.css";

const NewsList = () => {
    const { news } = useNews();
    let highlightedNews = null;
    let remainingNews = null;

    if (news.activeFilter === "all") {
        const highlightedIndex = news.filteredNews.findIndex(
            (newsItem: NewsContentfulResponseType) => newsItem.fields.highlighted
        );
        highlightedNews = highlightedIndex !== -1 ? news.filteredNews[highlightedIndex] : null;
        remainingNews = news.filteredNews.filter((_news: NewsType, index: number) => index !== highlightedIndex);
    } else {
        remainingNews = news.filteredNews;
    }

    return (
        <div className={styles.newsList}>
            {highlightedNews && <HighlightedNews highlightedNews={highlightedNews.fields} />}
            {remainingNews && remainingNews.map((newsItem: NewsContentfulResponseType) => (
                <News key={newsItem.sys.id} newsItem={newsItem.fields} />
            ))}
        </div>
    );
};

export default NewsList;
