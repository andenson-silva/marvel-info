import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ComicsGateway } from './comics.gateway';
import { Comic } from './models';

@Injectable({
    providedIn: 'root'
})
export class ComicsService {
    constructor(private gateway: ComicsGateway) { }

    listComics(limit = 10): Observable<Comic[]> {
        return this.gateway.listComics(limit)
            .pipe(map(c => c.data.results));
    }
}