import Link from "next/link";
import { NewsType } from "@/app/utils/types/types";
import styles from "./News.module.css";

type NewsProps = {
    newsItem: NewsType;
};

const News: React.FC<NewsProps> = ({ newsItem }) => {
    return (
        <div className={styles.news}>
            <Link href={`/news/${newsItem.slug}`} className={styles.newsLink}>
                <img
                    className={styles.newsImg}
                    src={newsItem.image.fields.file.url}
                    alt={newsItem.title}
                />
                <h2 className={styles.newsTitle}>{newsItem.title}</h2>
                <p className={styles.newsDescription}>{newsItem.description}</p>
            </Link>
        </div>
    );
};

export default News;
