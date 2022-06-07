import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit {

  showLoader: boolean = false;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private loader: LoaderService) { }

  ngOnInit(): void {
    this.loader.loading.subscribe({
      next: value => {
        this.showLoader = value;
        this.changeDetectorRef.detectChanges();
      }
    });
  }

}
