import { NewsType } from "@/app/utils/types/types";
import "./HighlightedNews.css";

type HighlightedNewsProps = {
    highlightedNews: NewsType;
};

const HighlightedNews: React.FC<HighlightedNewsProps> = ({ highlightedNews }) => {
    return (
        <div className="highlighted-news">
            <img src={highlightedNews.image} alt={highlightedNews.title} className="highlighted-news-img" />
            <div className="highlighted-news-content">
                <h2 className="highlighted-news-title">{highlightedNews.title}</h2>
                <p className="highlighted-news-description">{highlightedNews.content}</p>
            </div>
        </div>
    );
};

export default HighlightedNews;
