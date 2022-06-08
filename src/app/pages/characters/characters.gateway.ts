import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultApiGateway } from '@core/util';
import { MarvelDataWrapper } from '@shared/models';
import { CharacterDataContainer } from './models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CharactersGateway extends DefaultApiGateway {

    constructor(private httpClient: HttpClient) {
        super()
    }

    listCharacters(offset: number, size: number): Observable<MarvelDataWrapper<CharacterDataContainer>> {
        let params = new HttpParams();
        params = params.append('orderBy', `name`)
        params = params.append('limit', `${size}`)
        params = params.append('offset', `${offset}`)
        return this.httpClient.get<MarvelDataWrapper<CharacterDataContainer>>(`${this.apiUrl}/characters`, { params });
    }
}