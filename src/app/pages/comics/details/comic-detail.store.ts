import { Injectable } from "@angular/core";
import { BehaviorStore } from "@shared/models";
import { Comic } from "app/pages/comics/models";

export interface ComicDetailsStoreData {
    comic: Comic;
}

@Injectable()
export class ComicDetailsStore extends BehaviorStore<ComicDetailsStoreData> { }
