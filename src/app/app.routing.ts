import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'comics',
        pathMatch: 'full'
    },
    {
        path: 'comics',
        loadChildren: () => import('./pages/comics/comics.module').then(m => m.ComicsModule)
    },
    {
        path: 'series',
        loadChildren: () => import('./pages/series/series.module').then(m => m.SeriesModule)
    },
    {
        path: 'characters',
        loadChildren: () => import('./pages/characters/characters.module').then(m => m.CharactersModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
