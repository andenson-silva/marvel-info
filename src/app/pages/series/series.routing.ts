import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';

const routes: Routes = [
    { path: '', component: SeriesComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SeriesRoutingModule {}
