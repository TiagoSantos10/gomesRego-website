import Link from "next/link";
import { NewsType } from "@/app/utils/types/types";
import styles from "./HighlightedNews.module.css";

type HighlightedNewsProps = {
    highlightedNews: NewsType;
};

const HighlightedNews: React.FC<HighlightedNewsProps> = ({ highlightedNews }) => {
    return (
        <div className={styles.highlightedNews}>
            <Link href={`/news/${highlightedNews.slug}`} className={styles.highlightedNewsLink}>
                <img
                    src={highlightedNews.image.fields.file.url}
                    alt={highlightedNews.title}
                    className={styles.highlightedNewsImage}
                />
                <div className={styles.highlightedNewsContent}>
                    <h2 className={styles.highlightedNewsTitle}>{highlightedNews.title}</h2>
                    <p className={styles.highlightedNewsDescription}>{highlightedNews.description}</p>
                </div>
            </Link>
        </div>
    );
};

export default HighlightedNews;
