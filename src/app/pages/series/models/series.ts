export interface Url {
    type: string;
    url: string;
}

export interface Thumbnail {
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

export interface EventSummary {
    resourceURI: string;
    name: string;
    role: string;
}

export interface Events {
    available: number;
    collectionURI: string;
    items: EventSummary[];
    returned: number;
}

export interface SeriesSummary {
    resourceURI: string;
    name: string;
}

export interface Serie {
    id: number;
    title: string;
    description: string;
    resourceURI: string;
    urls: Url[];
    startYear: number;
    endYear: number;
    rating: string;
    type: string;
    modified: Date;
    thumbnail: Thumbnail;
    creators: Creators;
    characters: Characters;
    stories: Stories;
    comics: Comics;
    events: Events;
    next: SeriesSummary;
    previous?: SeriesSummary;
}

export interface SeriesDataContainer  {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Serie[];
}
