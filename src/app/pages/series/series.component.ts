import { Component, OnInit } from '@angular/core';
import { loadPageStrategy } from '@shared/paginator';
import { tap } from 'rxjs';
import { Serie } from './models';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  series: Serie[] = [];

  listSeriesStrategy: loadPageStrategy = (page, size) => {
    return this.seriesService.list(page, size)
      .pipe(tap(series => {
        this.series = series.results;
      }));
  };


  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
  }


}
