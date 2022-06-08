import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { SeriesRoutingModule } from './series.routing';
import { PaginatorModule } from '@shared/paginator';



@NgModule({
  declarations: [
    SeriesComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    PaginatorModule
  ]
})
export class SeriesModule { }
