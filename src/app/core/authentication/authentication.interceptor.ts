import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const [timestamp, apiKey, hash] = this.auth.getCredentials();
        let params = req.params;
        params = params.append('ts', timestamp);
        params = params.append('apikey', apiKey);
        params = params.append('hash', hash);

        const clone = req.clone({
            params
        })
        
        return next.handle(clone);
    }

}