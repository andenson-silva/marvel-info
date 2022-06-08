import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    showing: boolean = false;

    constructor(private loader: LoaderService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

        if (!this.showing) {
            this.loader.showLoader();
        }
        this.showing = true;
        return next.handle(req).pipe(
            finalize(() => {
                this.showing = false;
                this.loader.hideLoader();
            })
        );
    }
}
