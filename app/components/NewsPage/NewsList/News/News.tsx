import Link from "next/link";
import { NewsType } from "@/app/utils/types/types";
import "./News.css";

type NewsProps = {
    newsItem: NewsType;
};

const News: React.FC<NewsProps> = ({ newsItem }) => {
    return (
        <div className="news">
            <Link href={`/news/${newsItem.slug}`} className="news-link">
                <img className="news-img" src={newsItem.image.fields.file.url} alt={newsItem.title} />
                <h2 className="news-title">{newsItem.title}</h2>
                <p className="news-description">{newsItem.description}</p>
            </Link>
        </div>
    );
};

export default News;
