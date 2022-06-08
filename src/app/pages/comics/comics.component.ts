import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { loadPageStrategy } from '@shared/paginator';
import { ComicDetailsStore } from './details/comic-detail.store';
import { tap } from 'rxjs';
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

  constructor(
    private comicService: ComicsService,
    private route: ActivatedRoute,
    private router: Router,
    private comicStore: ComicDetailsStore,
    ) { }

  ngOnInit(): void {
  }

  navigateToComic(comic: Comic):void {
    this.comicStore.setData({comic});
    this.router.navigate(['details', comic.id], {relativeTo: this.route});
  }


}
