import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { DataContainer } from './data';

const PAGE_SIZES = [10, 20, 50, 100];
export type loadPageStrategy = (page: number, offset: number) => Observable<DataContainer>;
type PageSizes = 10 | 20 | 50 | 100;

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnDestroy {

  @Input() loadPageStrategy!: loadPageStrategy;
  @Input() totalLength: number = 0;
  @Input() pageSizes = PAGE_SIZES;
  @Input() initialPageSize: PageSizes = 20;
  @Input() autoLoad = true;

  @Input() totalLabel = '';
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

  pageSizeChanges(): void {
    this.pageSizeControl.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: size => {
          this.pageSize = size;
          this.page = 0;
          this.getPage();
        }
      })
  }

  getPage(): void {

    let offset = this.page * this.pageSize;

    this.loadPageStrategy(offset, this.pageSize)
      .subscribe({
        next: data => {
          this.totalLength = data.total;
          this.qtdPages = Math.ceil((this.totalLength / this.pageSize))
        }
      });

  }

  nextPage(targetPage?: number) {
    this.page = targetPage || ++this.page;
    this.getPage();
  }

  prevPage(targetPage?: number) {
    this.page = targetPage || --this.page;
    this.getPage();
  }

  get isLastPage(): boolean {
    return this.page === this.qtdPages;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }


}
