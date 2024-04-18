import { NewsType } from "@/app/utils/types/types";
import "./News.css";

type NewsProps = {
    newsItem: NewsType;
};

const News: React.FC<NewsProps> = ({ newsItem }) => {
    return (
        <div className="news">
            <img className="news-img" src={newsItem.image.fields.file.url} alt={newsItem.title} />
            <h2 className="news-title">{newsItem.title}</h2>
            <p className="news-description">{newsItem.description}</p>
        </div>
    );
};

export default News;
