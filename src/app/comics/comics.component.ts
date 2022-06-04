import { Component, OnInit } from '@angular/core';
import { ComicsService } from './comics.service';
import { Comic } from './models';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  comics: Comic[] = [];

  constructor(private comicService: ComicsService) { }

  ngOnInit(): void {
    this.loadComics()
  }

  loadComics() {
    this.comicService.listComics()
    .subscribe({
      next: comics => {
        this.comics = comics
      }
    })
  }

}
