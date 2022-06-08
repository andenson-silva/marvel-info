import { BehaviorSubject, Observable } from 'rxjs';

export abstract class BehaviorStore<T> {

    private state$ = new BehaviorSubject<T | null>(null);

    get data(): T | null {
        return this.state$.value;
    }

    setData(value: T): void {
        this.state$.next(value);
    }

    getData(): Observable<T | null> {
        return this.state$.asObservable();
    }

    clear(): void {
        this.state$.next(null);
    }


}
