import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultApiGateway } from '@core/util';
import { MarvelDataWrapper } from '@shared/models';
import { Observable } from 'rxjs';
import { SeriesDataContainer } from './models';

@Injectable({
    providedIn: 'root'
})
export class SeriesGateway extends DefaultApiGateway {

    constructor(private httpClient: HttpClient) {
        super()
    }

    listSeries(offset: number, size: number): Observable<MarvelDataWrapper<SeriesDataContainer>> {
        let params = new HttpParams();
        params = params.append('orderBy', `title`)
        params = params.append('limit', `${size}`)
        params = params.append('offset', `${offset}`)
        return this.httpClient.get<MarvelDataWrapper<SeriesDataContainer>>(`${this.apiUrl}/series`, { params });
    }
}