import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DefaultApiGateway } from '../core';
import { ComicDataWrapper } from './models';

@Injectable({
    providedIn: 'root'
})
export class ComicsGateway extends DefaultApiGateway {

    constructor(private httpClient: HttpClient) {
        super()
    }

    listComics(limit = 10): Observable<ComicDataWrapper> {
        let params = new HttpParams();
        params = params.append('limit', `${limit}`)
        return this.httpClient.get<ComicDataWrapper>(`${this.apiUrl}/comics`, { params });
    }
}