import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthenticationModule } from './authentication/authtentication.module';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './loader/loader.interceptor';
import { LoaderService } from './loader/loader.service';
import { MenuComponent } from '../shared/menu/menu.component';

@NgModule({
    imports: [CommonModule, HttpClientModule, AuthenticationModule],
    exports: [LoaderComponent],
    declarations: [LoaderComponent],
    providers: [
        LoaderService,
        { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
    ],
})
export class CoreModule { }
