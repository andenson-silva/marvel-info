import { Component, OnDestroy, OnInit } from '@angular/core';
import { loadPageStrategy } from '@shared/paginator';
import { Character } from './models';
import { BehaviorSubject, debounceTime, Subject, takeUntil, tap } from 'rxjs';
import { CharactersService } from './characters.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {

  filterControl = new FormControl('');
  characters: Character[] = [];
  $reloadPagination: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  $destroyed = new Subject();

  listCharactersStrategy: loadPageStrategy = (page, size) => {
    const textFilter = this.filterControl.value || '';
    return this.charactersService.list(page, size, textFilter)
      .pipe(tap(characters => {
        this.characters = characters.results;
      }));
  };


  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.filterCharactersChanges()
  }

  filterCharactersChanges():void {
    this.filterControl.valueChanges
      .pipe(
        debounceTime(400),
        takeUntil(this.$destroyed)
        )
      .subscribe({
        next: () => {
          this.$reloadPagination.next(true);
        }
      });

  }

  ngOnDestroy(): void {
    this.$destroyed.next(null);
    this.$destroyed.complete()
  }


}
