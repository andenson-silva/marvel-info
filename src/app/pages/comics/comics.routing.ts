import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComicsComponent } from './comics.component';
import { ComicDetailsComponent } from './details/comic-details.component';

const routes: Routes = [
    {
        path: '',
        component: ComicsComponent
    },
    {
        path: 'details/:id',
        component: ComicDetailsComponent
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComicsRoutingModule { }
