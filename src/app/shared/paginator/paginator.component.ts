import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { DataContainer } from './data';

const PAGE_SIZES = [10, 20, 50, 100];
export type loadPageStrategy = (page: number, size: 10 | 20 | 50 | 100) => Observable<DataContainer>;
type PageSizes = 10 | 20 | 50 | 100;

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnDestroy {

  @Input() loadPageStrategy!: loadPageStrategy;
  @Input() totalLength: number = 0;
  @Input() pageSizes = PAGE_SIZES;
  @Input() initialPageSize: PageSizes = 20;
  @Input() autoLoad = true;
  private destroyed$ = new Subject();
  page: number = 0;
  pageSize: PageSizes = 20;
  qtdPages: number = 0;

  pageSizeControl = new FormControl()

  constructor() {
    this.pageSize = this.initialPageSize;
    this.pageSizeControl.setValue(this.pageSize);
  }

  ngOnInit(): void {
    if (this.autoLoad) {
      this.getPage();
    }
    this.pageSizeChanges();
  }

  pageSizeChanges() {
    this.pageSizeControl.valueChanges
    .pipe(takeUntil(this.destroyed$))
    .subscribe({
      next: size => {
        this.pageSize = size;
        this.getPage();
      }
    })
  }

  getPage() {
    this.loadPageStrategy(this.page, this.pageSize)
      .subscribe({
        next: data => {
          this.totalLength = data.total;
          this.qtdPages = Math.ceil((this.totalLength / this.pageSize))
        }
      });

  }

  nextPage() {
    ++this.page
    this.getPage();
  }

  prevPage() {
    --this.page
    this.getPage();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }


}
