import { Observable } from 'rxjs';
import { BookService } from './../../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from 'src/app/models/book';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  book$: Observable<Book> = null;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    console.log('index: ', this.route.snapshot.paramMap.get('index'));

    this.book$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.bookService.get(+params.get('index'))
      )
    );

    // .subscribe((param: ParamMap) =>
    //   console.log('Index: ', param.get('index'))
    // );
  }
}
