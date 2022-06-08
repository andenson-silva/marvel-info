import { Component, OnInit } from '@angular/core';
import { loadPageStrategy } from '@shared/paginator';
import { Character } from './models';
import { tap } from 'rxjs';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];

  listCharactersStrategy: loadPageStrategy = (page, size) => {
    return this.charactersService.list(page, size)
      .pipe(tap(characters => {
        this.characters = characters.results;
      }));
  };


  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
  }


}
