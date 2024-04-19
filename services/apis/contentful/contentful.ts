/**
 * Create the client to connect to Contentful
 * @returns {Object} client
 */
const createClient = () => {
    const contentful = require("contentful");
    const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        environment: process.env.CONTENTFUL_ENVIRONMENT,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });
    return client;
};

/**
 * Function to get the news items from Contentful
 * @returns {Array} Array containing the news items
 */
export const getNews = async () => {
    const client = createClient();
    const response = await client.getEntries({ content_type: "news" });
    return response.items;
};

/**
 * Function to get the news categories from Contentful
 * @returns {Array} Array containing the news categories
 */
export const getCategories = async () => {
    const client = createClient();
    const response = await client.getEntries({ content_type: "newsCategory" });
    return response.items;
};

/**
 * Function to get the news page content from Contentful
 * @returns {Object} Object containing the news page content
 */
export const getNewsPage = async () => {
    const client = createClient();
    const response = await client.getEntries({ content_type: "newsPage" });
    return response.items[0].fields;
};
