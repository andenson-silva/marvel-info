import { Injectable } from '@angular/core';
import { CharacterDataContainer } from './models';
import { map, Observable } from 'rxjs';
import { CharactersGateway } from './characters.gateway';

@Injectable({
    providedIn: 'root'
})
export class CharactersService {
    constructor(private gateway: CharactersGateway) { }

    list(offset: number, size: number, textFilter: string): Observable<CharacterDataContainer> {
        return this.gateway.listCharacters(offset, size, textFilter)
            .pipe(map(c => c.data));
    }
}