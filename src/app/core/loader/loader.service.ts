import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoaderService {
    private showLoader$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    showLoader(): void {
        this.showLoader$.next(true);
    }

    hideLoader(): void {
        this.showLoader$.next(false);
    }

    get loading(): Observable<boolean> {
        return this.showLoader$.asObservable();
    }
}
