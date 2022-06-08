import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsComponent } from './comics.component';
import { ComicsRoutingModule } from './comics.routing';
import { PaginatorModule } from '@shared/paginator';



@NgModule({
  declarations: [
    ComicsComponent
  ],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    PaginatorModule
  ]
})
export class ComicsModule { }
