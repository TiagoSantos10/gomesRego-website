import { Almarai } from "next/font/google";
import { getCategories, getNews } from "@/services/apis/contentful/contentful";
import FiltersSection from "../components/NewsPage/FiltersSection/FiltersSection";
import NewsList from "../components/NewsPage/NewsList/NewsList";
import NewsProvider from "../components/NewsPage/NewsProvider/NewsProvider";
import "./NewsPage.css";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

const News = async () => {
    const news = await getNews();
    const categories = await getCategories();

    return (
        <NewsProvider initialNews={news} filters={categories}>
            <section>
                <h1 className={`${almarai.className} section-title`}>Notícias</h1>
                <FiltersSection />
                <NewsList />
            </section>
        </NewsProvider>
    );
};

export default News;
