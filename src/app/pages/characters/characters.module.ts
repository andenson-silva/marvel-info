import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from '@shared/paginator';
import { CharactersComponent } from './characters.component';
import { CharactersRoutingModule } from './characters.routing';



@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    PaginatorModule
  ]
})
export class CharactersModule { }
