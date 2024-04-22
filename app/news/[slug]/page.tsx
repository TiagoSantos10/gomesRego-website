import DetailedNews from "@/app/components/DetailedNewsPage/DetailedNews";
import { NewsType } from "@/app/utils/types/types";
import { getDetailedNews } from "@/services/apis/contentful/contentful";

type DetailedNewsPageProps = {
    params: {
        slug: string;
    };
};

const DetailedNewsPage: React.FC<DetailedNewsPageProps> = async ({ params }) => {
    const { slug } = params;
    const news: NewsType = await getDetailedNews(slug);

    return (
        <DetailedNews news={news} />
    );
};

export default DetailedNewsPage;
