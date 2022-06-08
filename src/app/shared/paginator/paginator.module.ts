import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PaginatorComponent
  ]
})
export class PaginatorModule { }
