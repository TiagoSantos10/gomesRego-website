import { Almarai } from "next/font/google";
import FiltersSection from "../components/NewsPage/FiltersSection/FiltersSection";
import NewsList from "../components/NewsPage/NewsList/NewsList";
import NewsProvider from "../components/NewsPage/NewsProvider/NewsProvider";
import Button from "../components/Common/Button/Button";
import "./NewsPage.css";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

const News = () => {
    return (
        <NewsProvider>
            <section>
                <h1 className={`${almarai.className} section-title`}>Notícias</h1>
                <FiltersSection />
                <NewsList />
                <Button text="Ver mais" size="large" />
            </section>
        </NewsProvider>
    );
};

export default News;
