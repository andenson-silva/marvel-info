import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsComponent } from './comics.component';
import { ComicsRoutingModule } from './comics.routing';



@NgModule({
  declarations: [
    ComicsComponent
  ],
  imports: [
    CommonModule,
    ComicsRoutingModule
  ]
})
export class ComicsModule { }
