import { NewsType } from "@/app/utils/types/types";
import Image from "next/image";

type NewsProps = {
    newsItem: NewsType;
};

const News: React.FC<NewsProps> = ({ newsItem }) => {
    return (
        <>
            <div className="news">
                <Image src={newsItem.image} alt={newsItem.title} width={315} height={260} />
                <h2>{newsItem.title}</h2>
                <p>{newsItem.content}</p>
                <p>{newsItem.date}</p>
            </div>
        </>
    );
};

export default News;
