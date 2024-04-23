import { Almarai } from "next/font/google";
import { getCategories, getNews, getNewsPage } from "@/services/apis/contentful/contentful";
import FiltersSection from "../components/NewsPage/FiltersSection/FiltersSection";
import NewsList from "../components/NewsPage/NewsList/NewsList";
import NewsProvider from "../components/NewsPage/NewsProvider/NewsProvider";
import styles from "./NewsPage.module.css";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

const News = async () => {
    const { newsHeader } = await getNewsPage();
    const news = await getNews();
    const categories = await getCategories();

    return (
        <NewsProvider initialNews={news} filters={categories}>
            <section className={styles.section}>
                <h1 className={`${almarai.className} section-title`}>{newsHeader}</h1>
                <FiltersSection />
                <NewsList />
            </section>
        </NewsProvider>
    );
};

export default News;
