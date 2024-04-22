import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/public/fontawesome";
import "./DetailedNews.css";
import { NewsType } from "@/app/utils/types/types";

type DetailedNewsProps = {
    news: NewsType;
};

const DetailedNews: React.FC<DetailedNewsProps> = ({ news }) => {
    const marked = require("marked");
    const { title, image, date, description, extraContent, slug } = news;
    const markdownExtraContent = extraContent && marked.parse(extraContent);

    return (
        <section className="detailed-news-container">
            <h1 className="section-title">{title}</h1>
            <div className="detailed-news-content">
                <img src={image.fields.file.url} alt={slug} className="detailed-news-img" />
                <div className="detailed-news-date-content">
                    <FontAwesomeIcon
                        icon={["far", "calendar"]}
                        size="xs"
                        color="var(--gras-gray)"
                    />
                    <div className="detailed-news-date">{date}</div>
                </div>
                <p>{description}</p>
                {extraContent && (
                    <div dangerouslySetInnerHTML={{__html: markdownExtraContent }} />
                )}
            </div>
        </section>
    );
};

export default DetailedNews;
