import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [MenuComponent],
    imports: [ CommonModule, RouterModule ],
    exports: [MenuComponent],
    providers: [],
})
export class MenuModule {}