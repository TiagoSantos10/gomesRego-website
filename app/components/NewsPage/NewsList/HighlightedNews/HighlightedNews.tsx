import Link from "next/link";
import { NewsType } from "@/app/utils/types/types";
import "./HighlightedNews.css";

type HighlightedNewsProps = {
    highlightedNews: NewsType;
};

const HighlightedNews: React.FC<HighlightedNewsProps> = ({ highlightedNews }) => {
    return (
        <div className="highlighted-news">
            <Link href={`/news/${highlightedNews.slug}`} className="highlighted-news-link">
                <img src={highlightedNews.image.fields.file.url} alt={highlightedNews.title} className="highlighted-news-img" />
                <div className="highlighted-news-content">
                    <h2 className="highlighted-news-title">{highlightedNews.title}</h2>
                    <p className="highlighted-news-description">{highlightedNews.description}</p>
                </div>
            </Link>
        </div>
    );
};

export default HighlightedNews;
