import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SeriesDataContainer } from './models';
import { SeriesGateway } from './series.gateway';

@Injectable({
    providedIn: 'root'
})
export class SeriesService {
    constructor(private gateway: SeriesGateway) { }

    list(offset: number, size: number): Observable<SeriesDataContainer> {
        return this.gateway.listSeries(offset, size)
            .pipe(map(c => c.data));
    }
}