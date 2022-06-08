import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { loadPageStrategy } from '@shared/paginator';
import { ComicDetailsStore, ComicDetailsStoreData } from './details/comic-detail.store';
import { tap } from 'rxjs';
import { ComicsService } from './comics.service';
import { Comic } from './models';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  paginationCache!: ComicDetailsStoreData['paginationCache'];

  listComicsStrategy: loadPageStrategy = (offset, size) => {
    this.paginationCache = { offset, size };
    return this.comicService.listComics(offset, size)
      .pipe(tap(comics => {
        this.comics = comics.results;
      })
      );
  };

  comics: Comic[] = [];

  constructor(
    private comicService: ComicsService,
    private route: ActivatedRoute,
    private router: Router,
    private comicStore: ComicDetailsStore,
  ) { }

  ngOnInit(): void {
    const data = this.comicStore.data;

    if(data) {
      this.paginationCache = data.paginationCache;
    }
    this.comicStore.clear();
  }

  navigateToComic(comic: Comic): void {
    this.comicStore.setData({ comic, paginationCache: { ...this.paginationCache } });
    this.router.navigate(['details', comic.id], { relativeTo: this.route });
  }


}
