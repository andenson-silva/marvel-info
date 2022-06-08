import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultApiGateway } from '@core/util';
import { MarvelDataWrapper } from '@shared/models';
import { Observable } from 'rxjs';
import { ComicDataContainer } from './models';

@Injectable({
    providedIn: 'root'
})
export class ComicsGateway extends DefaultApiGateway {

    constructor(private httpClient: HttpClient) {
        super()
    }

    listComics(offset: number, size: number): Observable<MarvelDataWrapper<ComicDataContainer>> {
        let params = new HttpParams();
        params = params.append('orderBy', `title`)
        params = params.append('format', `comic`)
        params = params.append('limit', `${size}`)
        params = params.append('offset', `${offset}`)
        return this.httpClient.get<MarvelDataWrapper<ComicDataContainer>>(`${this.apiUrl}/comics`, { params });
    }
}