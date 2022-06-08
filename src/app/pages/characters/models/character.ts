export interface Thumbnail {
    path: string;
    extension: string;
}

export interface ComicSummary {
    resourceURI: string;
    name: string;
}

export interface Comics {
    available: number;
    collectionURI: string;
    items: ComicSummary[];
    returned: number;
}

export interface SeriesSummary {
    resourceURI: string;
    name: string;
}

export interface Series {
    available: number;
    collectionURI: string;
    items: SeriesSummary[];
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

export interface Url {
    type: string;
    url: string;
}

export interface Character {
    id: number;
    name: string;
    description: string;
    modified: Date;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: Comics;
    series: Series;
    stories: Stories;
    events: Events;
    urls: Url[];
}

export interface CharacterDataContainer {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
}