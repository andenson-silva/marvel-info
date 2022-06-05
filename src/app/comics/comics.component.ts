import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { loadPageStrategy } from '../shared/paginator/paginator.component';
import { ComicsService } from './comics.service';
import { Comic } from './models';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  listComicsStrategy: loadPageStrategy = (page, size) => {
    return this.comicService.listComics(page, size)
      .pipe(tap(comics => {
        this.comics = comics.results;
      })
      )
  };

  comics: Comic[] = [];

  constructor(private comicService: ComicsService) { }

  ngOnInit(): void {
  }


}
