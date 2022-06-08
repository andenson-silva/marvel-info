import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, filter, Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { DataContainer } from './data';

const PAGE_SIZES = [10, 20, 50, 100];
export type loadPageStrategy = (page: number, offset: number) => Observable<DataContainer>;
export type PageSizes = 10 | 20 | 50 | 100;

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnDestroy {

  @Input() loadPageStrategy!: loadPageStrategy;
  @Input() totalLength: number = 0;
  @Input() pageSizes = PAGE_SIZES;
  @Input() initialPageSize = 20;
  @Input() autoLoad = true;
  @Input('reloadPagination') $reloadPagination: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  @Input() totalLabel = '';
  private destroyed$ = new Subject();
  @Input() initialOffset = 0;
  page: number = 0;
  pageSize = 20;
  qtdPages: number = 0;

  pageSizeControl = new FormControl({value: 20, disabled: true})

  constructor() {
    this.pageSize = this.initialPageSize;
    this.pageSizeControl.setValue(this.pageSize);
  }

  ngOnInit(): void {
    if (this.autoLoad) {
      this.getPage(this.initialOffset);
    }
    this.pageSizeChanges();
    this.reloadPaginationHandler();
  }

  pageSizeChanges(): void {
    this.pageSizeControl.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: size => {
          this.pageSize = size || 20;
          this.page = 0;
          this.getPage();
        }
      })
  }

  reloadPaginationHandler(): void {
    this.$reloadPagination.asObservable()
      .pipe(
        takeUntil(this.destroyed$),
        filter(reload => reload)
        )
      .subscribe({
        next: () => {
          this.page = 0;
          this.getPage();
        }
      })
  }

  getPage(initialOffset?: number): void {

    let offset = 0

    if(initialOffset) {
      offset = initialOffset;
      this.page = initialOffset / this.pageSize;
    } else {
      offset = this.page * this.pageSize;
    }


    this.loadPageStrategy(offset, this.pageSize)
      .subscribe({
        next: data => {
          this.totalLength = data.total;
          this.qtdPages = Math.ceil((this.totalLength / this.pageSize));

          const onePageOnly = this.pageSize > this.totalLength;
          if (onePageOnly) {
            this.pageSizeControl.disable({emitEvent: false});
          }
          else {
            this.pageSizeControl.enable({emitEvent: false});
          }
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
    return (!this.page && !this.totalLength) || (this.page + 1) === this.qtdPages;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }


}
