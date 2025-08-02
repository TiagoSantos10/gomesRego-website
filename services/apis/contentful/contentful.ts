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

/**
 * Function to get the team members from Contentful
 * @returns {Array} Array containing the team members
 */
export const getTeamPage = async () => {
    const client = createClient();
    const response = await client.getEntries({ content_type: "teamPage" });
    return response.items[0].fields;
};

/**
 * Function to get the services page content from Contentful
 * @returns {Object} Object containing the services page content
 */
export const getServicesPage = async () => {
    const client = createClient();
    const response = await client.getEntries({ content_type: "servicesPage", include: 10 });
    return response.items[0].fields;
};

/**
 * Function to get the detailed news item from Contentful by slug
 * @param slug the slug of the news item
 * @returns {Object} Object containing the detailed news item
 */
export const getDetailedNews = async (slug: string) => {
    const client = createClient();
    const response = await client.getEntries({ content_type: "news", "fields.slug": slug });
    return response.items[0].fields;
};

/**
 * Function to get the home page content from Contentful
 * @returns {Object} Object containing the home page content
 */
export const getHomePage = async () => {
    const client = createClient();
    const response = await client.getEntries({ content_type: "homePage", include: 10 });
    return response.items[0].fields;
};

/**
 * Function to get the contacts page content from Contentful
 * @returns {Object} Object containing the contacts page content
 */
export const getContactsPage = async () => {
    const client = createClient();
    const response = await client.getEntries({ content_type: "contactsPage", include: 10 });
    return response.items[0].fields;
};
