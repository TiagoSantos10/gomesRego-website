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
        description: string;
        image: NewsImageType;
        date: string;
        highlighted: boolean;
        category: NewsCategoriesType;
        extraContent: string;
    }
};

export type NewsType = {
    title: string;
    description: string;
    image: NewsImageType;
    date: string;
    highlighted: boolean;
    category: NewsCategoriesType;
    extraContent: string;
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
