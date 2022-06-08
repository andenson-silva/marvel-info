import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsComponent } from './comics.component';
import { ComicsRoutingModule } from './comics.routing';
import { PaginatorModule } from '@shared/paginator';
import { ComicDetailsComponent } from 'app/pages/comics/details/comic-details.component';
import {  ComicDetailsStore } from 'app/pages/comics/details/comic-detail.store';



@NgModule({
  declarations: [
    ComicsComponent,
    ComicDetailsComponent
  ],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    PaginatorModule
  ],
  providers: [ComicDetailsStore]
})
export class ComicsModule { }
