import { Component, OnInit } from '@angular/core';
import { ComicDetailsStore } from 'app/pages/comics/details/comic-detail.store';
import { Comic } from 'app/pages/comics/models';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.scss']
})
export class ComicDetailsComponent implements OnInit {

  comic!: Comic;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private comicStore: ComicDetailsStore,
    private location: Location) { }

  ngOnInit(): void {
    this.getComicData()
  }

  getComicData(): void {
    const data = this.comicStore.data;
    if (!data) {
      this.location.back();
    } else {
      this.comic = data.comic;
    }

  }

  back(): void {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }

}
