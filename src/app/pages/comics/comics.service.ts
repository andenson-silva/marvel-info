import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ComicsGateway } from './comics.gateway';
import { Comic, ComicDataContainer } from './models';

@Injectable({
    providedIn: 'root'
})
export class ComicsService {
    constructor(private gateway: ComicsGateway) { }

    listComics(offset: number, size: number): Observable<ComicDataContainer> {
        return this.gateway.listComics(offset, size)
            .pipe(map(c => c.data));
    }
}