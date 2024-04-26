import { BLOCKS } from "@contentful/rich-text-types";

export type NewsCategoriesType = {
    sys: {
        id: string;
    },
    fields: {
        name: string;
    }
};

export type NewsImageType = {
    sys: {
        id: string;
    },
    fields: {
        title: string;
        file: {
            url: string;
            fileName: string;
            contentType: string;
        }
    }
};

export type NewsContentfulResponseType = {
    sys: {
        id: string;
    },
    fields: {
        title: string;
        slug: string;
        description: string;
        image: NewsImageType;
        date: string;
        highlighted: boolean;
        category: NewsCategoriesType;
        extraContent: {
            nodeType: BLOCKS.DOCUMENT;
            data: {};
            content: [];
        };
    }
};

export type NewsType = {
    title: string;
    slug: string;
    description: string;
    image: NewsImageType;
    date: string;
    highlighted: boolean;
    category: NewsCategoriesType;
    extraContent: {
        nodeType: BLOCKS.DOCUMENT;
        data: {};
        content: [];
    };
};

export type NewsContextType = {
    filteredNews: NewsContentfulResponseType[];
    activeFilter: string;
};

export type TeamMemberType = {
    sys: {
        id: string;
    },
    fields: {
        name: string;
        description: string[];
        email: string;
        facebook: string;
        linkedin: string;
        image: NewsImageType;
    }
};

export type ServicesType = {
    sys: {
        id: string;
    },
    fields: {
        name: string;
        serviceImage: NewsImageType;
    }
};
