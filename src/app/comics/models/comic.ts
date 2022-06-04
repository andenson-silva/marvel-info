

export interface TextObject {
    type: string;
    language: string;
    text: string;
}

export interface Url {
    type: string;
    url: string;
}

export interface SeriesSummary {
    resourceURI: string;
    name: string;
}

export interface ComicSummary {
    resourceURI: string;
    name: string;
}

export interface ComicDate {
    type: string;
    date: any;
}

export interface ComicPrice {
    type: string;
    price: number;
}

export interface Image {
    path: string;
    extension: string;
}

export interface CreatorSummary {
    resourceURI: string;
    name: string;
    role: string;
}

export interface Creators {
    available: number;
    collectionURI: string;
    items: CreatorSummary[];
    returned: number;
}

export interface CharacterSummary {
    resourceURI: string;
    name: string;
    role: string;
}

export interface Characters {
    available: number;
    collectionURI: string;
    items: CharacterSummary[];
    returned: number;
}

export interface StorySummary {
    resourceURI: string;
    name: string;
    type: string;
}

export interface Stories {
    available: number;
    collectionURI: string;
    items: StorySummary[];
    returned: number;
}

export interface EventSummary {
    resourceURI: string;
    name: string;
}

export interface Events {
    available: number;
    collectionURI: string;
    items: EventSummary[];
    returned: number;
}

export interface Comic {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: any;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: TextObject[];
    resourceURI: string;
    urls: Url[];
    series: SeriesSummary;
    variants: ComicSummary[];
    collections: ComicSummary[];
    collectedIssues: ComicSummary[];
    dates: ComicDate[];
    prices: ComicPrice[];
    thumbnail: Image;
    images: Image[];
    creators: Creators;
    characters: Characters;
    stories: Stories;
    events: Events;
}

export interface ComicDataContainer {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Comic[];
}

export interface ComicDataWrapper {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: ComicDataContainer;
}
