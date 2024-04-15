import { Almarai } from "next/font/google";
import FiltersSection from "../components/NewsPage/FiltersSection/FiltersSection";
import NewsList from "../components/NewsPage/NewsList/NewsList";
import NewsProvider from "../components/NewsPage/NewsProvider/NewsProvider";
import news from "@/app/utils/dummy/news";
import "./NewsPage.css";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

const News = () => {
    return (
        <NewsProvider initialNews={news}>
            <section>
                <h1 className={`${almarai.className} section-title`}>Notícias</h1>
                <FiltersSection />
                <NewsList />
            </section>
        </NewsProvider>
    );
};

export default News;
