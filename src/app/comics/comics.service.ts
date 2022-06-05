import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ComicsGateway } from './comics.gateway';
import { Comic, ComicDataContainer } from './models';

@Injectable({
    providedIn: 'root'
})
export class ComicsService {
    constructor(private gateway: ComicsGateway) { }

    listComics(page: number, size = 20): Observable<ComicDataContainer> {
        const offset = size * (page === 0 ? 0 : page - 1);
        return this.gateway.listComics(offset, size)
            .pipe(map(c => c.data));
    }
}