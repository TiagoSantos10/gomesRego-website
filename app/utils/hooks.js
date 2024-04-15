import { useContext } from "react";
import { NewsContext } from "./context";

const useNews = () => {
    const news = useContext(NewsContext);
    return news;
};

export default useNews;
