import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from '@shared/paginator';
import { CharactersComponent } from './characters.component';
import { CharactersRoutingModule } from './characters.routing';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    PaginatorModule,
    ReactiveFormsModule
  ]
})
export class CharactersModule { }
