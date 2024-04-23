import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/public/fontawesome";
import { NewsType } from "@/app/utils/types/types";
import styles from "./DetailedNews.module.css";

type DetailedNewsProps = {
    news: NewsType;
};

const DetailedNews: React.FC<DetailedNewsProps> = ({ news }) => {
    const marked = require("marked");
    const { title, image, date, description, extraContent, slug } = news;
    const markdownExtraContent = extraContent && marked.parse(extraContent);

    return (
        <section className={styles.detailedNewsContainer}>
            <h1 className="section-title">{title}</h1>
            <div className={styles.detailedNewsContent}>
                <img src={image.fields.file.url} alt={slug} className={styles.detailedNewsImg} />
                <div className={styles.detailedNewsDateContent}>
                    <FontAwesomeIcon
                        icon={["far", "calendar"]}
                        size="xs"
                        color="var(--gras-gray)"
                    />
                    <div className={styles.detailedNewsDate}>{date}</div>
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
