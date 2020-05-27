import { map, delay } from 'rxjs/operators';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Dvd } from '../models/dvd';

@Injectable({
  providedIn: 'root',
})
export class DvdService {
  private dvdSubject$: BehaviorSubject<Dvd[]> = new BehaviorSubject<Dvd[]>([]);
  public dvds$ = this.dvdSubject$.asObservable();

  constructor() {
    timer(2000).subscribe(() => {
      this.dvdSubject$.next([
        { title: 'Avatar', year: 2014, genre: 'Action' },
        { title: 'Avatar1', year: 2015, genre: 'Music' },
        { title: 'Avengers', year: 2014, genre: 'Music' },
        { title: 'Lupita', year: 2019, genre: 'Action' },
        { title: 'Dos guri', year: 2020, genre: 'Action' },
      ]);
    });
  }

  add(dvd: Dvd) {
    this.dvdSubject$.getValue().push(dvd);
  }

  remove(i: number) {
    let dvd = this.dvdSubject$.getValue();
    if (i >= 0 && i < dvd.length) {
      dvd.splice(i, 1);
    }
  }

  get(i: number): Observable<Dvd> {
    return this.dvds$.pipe(
      map((dvd) => (i >= 0 && i < dvd.length ? dvd[i] : null), delay(2000))
    );
  }
}
