import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Book } from '../models/book';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private bookSubject$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(
    []
  );

  public books$ = this.bookSubject$.asObservable();

  constructor() {
    timer(2000).subscribe(() =>
      this.bookSubject$.next([
        { title: 'book1', pages: 100, authors: ['Abner1', 'Cris'] },
        { title: 'book2', pages: 200, authors: ['Abner2', 'Cris'] },
        { title: 'book3', pages: 300, authors: ['Abner3', 'Cris'] },
        { title: 'book4', pages: 400, authors: ['Abner4', 'Cris'] },
        { title: 'book5', pages: 500, authors: ['Abner5', 'Cris'] },
        { title: 'book6', pages: 600, authors: ['Abner6', 'Cris'] },
        { title: 'book7', pages: 200, authors: ['Abner7', 'Cris'] },
        { title: 'book8', pages: 300, authors: ['Abner8', 'Cris'] },
        { title: 'book9', pages: 200, authors: ['Abner9', 'Cris'] },
        { title: 'book9', pages: 800, authors: ['Abner125', 'Cris'] },
      ])
    );
  }

  add(b: Book) {
    this.bookSubject$.getValue().push(b);
  }

  remove(i: number) {
    let books = this.bookSubject$.getValue();
    if (i >= 0 && i < books.length) {
      books.splice(i, 1);
    }
  }

  get(i: number): Observable<Book> {
    return this.books$.pipe(
      map(
        (books) => (i >= 0 && i < books.length ? books[i] : null),
        delay(1000)
      )
    );
  }
}
