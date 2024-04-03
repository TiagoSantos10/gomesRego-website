import { Almarai } from "next/font/google";
import FiltersSection from "../components/NewsPage/FiltersSection/FiltersSection";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

const News = () => {
    return (
        <section>
            <h1 className={`${almarai.className} section-title`}>Notícias</h1>
            <FiltersSection />
        </section>
    );
};

export default News;
