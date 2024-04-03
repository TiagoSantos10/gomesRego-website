import { Almarai } from "next/font/google";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

const News = () => {
    return (
        <>
            <h1 className={`${almarai.className} section-title`}>Notícias</h1>
        </>
    );
};

export default News;
