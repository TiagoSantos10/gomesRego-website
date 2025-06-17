import { BLOCKS } from "@contentful/rich-text-types";

/**
 * Common types used across the application
 */

export type ImageType = {
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
        image: ImageType;
    }
};

export type PartnersType = {
    sys: {
        id: string;
    },
    fields: {
        name: string;
        description: string;
        image: ImageType;
        linkedin: string;
        facebook: string;
        email: string;
        role: string;
        introduction: string;
    }
};

export type ServicesType = {
    sys: {
        id: string;
    },
    fields: {
        name: string;
        serviceImage: ImageType;
    }
};

/**
 * Home Page types
 */

export type HomePageType = {
    sys: {
        id: string;
    },
    fields: {
        homePageEntry: string;
        partnersSection: PartnersSectionType;
        aboutSection: AboutSectionDataType;
        guidelines: CompanyGuidelinesDataType;
    }
};

export type AboutSectionDataType = {
    data: {
        sys: {
            id: string;
        },
        fields: {
            title: string;
            description: {
                nodeType: BLOCKS.DOCUMENT;
                data: {};
                content: [];
            };
            smallTitle: string;
            highlightsList: HighlightsListType[];
            image: ImageType;
        };
    };
    textAlignment: "left" | "right";
}

type HighlightsListType = {
    sys: {
        id: string;
    },
    fields: {
        title: string;
        description: string;
        icon: ImageType;
    }
}

export type CardsType = {
    sys: {
        id: string;
    },
    fields: {
        cardTitle: string;
        cardDescription: string;
        cardIcon: ImageType;
    };
}

export type CompanyGuidelinesDataType = {
    sys: {
        id: string;
    },
    fields: {
        title: string;
        headerDescription: string;
        footerDescription: string;
        cardsSection: CardsType[];
    }
};

export type PartnersSectionType = {
    sys: {
        id: string;
    },
    fields: {
        sectionTitle: string;
        sectionDescription: string;
        partnersList: PartnersType[];
    }
}

/**
 * News Page Types
 */

export type NewsCategoriesType = {
    sys: {
        id: string;
    },
    fields: {
        name: string;
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
        image: ImageType;
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
    image: ImageType;
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

/**
 * Team Page Types
 */

/**
 * Services Page Types
 */

export type ServicesSectionType = {
    sys: {
        id: string;
    },
    fields: {
        title: string;
        description: string;
        servicesList: ServicesType[];
    }
};

export type MissionSectionType = {
    sys: {
        id: string;
    },
    fields: {
        title: string;
        sectionDescription: string;
        cardTitle: string;
        cardDescription: string;
        cardIcon: ImageType;
        valuesList: CardsType[];
    }
}

export type ServicesPageType = {
    entryTitle: string;
    servicesSection: ServicesSectionType;
    missionSection: MissionSectionType;
};

/**
 * Contacts Page Types
 */

export type OfficeType = {
    sys: {
        id: string;
    },
    fields: {
        officeCity: string;
        street: string;
        floorRoom: string;
        adressCode: string;
    }
};
