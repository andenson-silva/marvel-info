import { Injectable } from "@angular/core";
import { BehaviorStore } from "@shared/models";
import { Comic } from "app/pages/comics/models";

export interface ComicDetailsStoreData {
    comic: Comic;
    paginationCache: {offset: number, size: number};
}

@Injectable()
export class ComicDetailsStore extends BehaviorStore<ComicDetailsStoreData> { }
