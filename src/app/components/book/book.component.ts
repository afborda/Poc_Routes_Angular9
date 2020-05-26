import { Book } from './../../models/book';
import { Observable } from 'rxjs';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  book$: Observable<Book[]>;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.book$ = this.bookService.books$;
  }
}
