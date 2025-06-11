import { BLOCKS } from "@contentful/rich-text-types";

export type NewsCategoriesType = {
    sys: {
        id: string;
    },
    fields: {
        name: string;
    }
};

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

export type ServicesType = {
    sys: {
        id: string;
    },
    fields: {
        name: string;
        serviceImage: ImageType;
    }
};

export type PartnersType = {
    sys: {
        id: string;
    },
    fields: {
        name: string;
        description: string;
        image: {
            sys: {
                id: string;
            },
            fields: {
                title: string;
                file: {
                    url: string;
                }
            }
        };
        linkedin: string;
        facebook: string;
        email: string;
    }
};

export type HomePageType = {
    sys: {
        id: string;
    },
    fields: {
        homePageEntry: string;
        partners: PartnersType[];
    }
};

export type ApproachItemType = {
    sys: {
        id: string;
    },
    fields: {
        title: string;
        description: string;
        itemIcon: ImageType;
    }
};

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
            highlightsList: {
                sys: {
                    id: string;
                },
                fields: {
                    title: string;
                    description: string;
                    icon: {
                        sys: {
                            id: string;
                        },
                        fields: {
                            file: {
                                url: string;
                            }
                        }
                    }
                }
            }[];
            image: {
                sys: {
                    id: string;
                },
                fields: {
                    file: {
                        url: string;
                    };
                };
            }
        };
    };
    textAlignment: "left" | "right";
}

export type ApproachSectionDataType = {
    sectionHeader: string;
    approachItems: ApproachItemType[];
};
