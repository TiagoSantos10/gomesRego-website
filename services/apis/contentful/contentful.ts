const createClient = () => {
    const contentful = require("contentful");
    const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        environment: process.env.CONTENTFUL_ENVIRONMENT,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });
    return client;
};

export const getNews = async () => {
    const client = createClient();
    const response = await client.getEntries({ content_type: "news" });
    return response.items;
};

export const getCategories = async () => {
    const client = createClient();
    const response = await client.getEntries({ content_type: "newsCategory" });
    return response.items;
};

export const getNewsPage = async () => {
    const client = createClient();
    const response = await client.getEntries({ content_type: "newsPage" });
    return response.items[0].fields;
};
