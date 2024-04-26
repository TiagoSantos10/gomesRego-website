import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/public/fontawesome";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { NewsType } from "@/app/utils/types/types";
import styles from "./DetailedNews.module.css";

type DetailedNewsProps = {
    news: NewsType;
};

const DetailedNews: React.FC<DetailedNewsProps> = ({ news }) => {
    const { title, image, date, description, extraContent, slug } = news;
    const markdownExtraContent = extraContent && documentToReactComponents(extraContent);

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
                {extraContent && markdownExtraContent}
            </div>
        </section>
    );
};

export default DetailedNews;
