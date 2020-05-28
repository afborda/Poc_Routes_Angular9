import { Observable } from 'rxjs';
import { BookService } from './../../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  book$: Observable<Book> = null;
  index: number;
  authors: string[];
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('index: ', this.route.snapshot.paramMap.get('index'));

    this.book$ = this.route.paramMap.pipe(
      tap((params: ParamMap) => (this.index = +params.get('index'))),
      switchMap((params: ParamMap) =>
        this.bookService.get(+params.get('index'))
      ),
      tap((b) => (this.authors = b ? b.authors : []))
    );

    // .subscribe((param: ParamMap) =>
    //   console.log('Index: ', param.get('index'))
    // );
  }
  remove() {
    this.bookService.remove(this.index);
    this.router.navigate(['books']);
  }
  goAuthors() {
    let url = '/books/' + this.index + '/authors';
    this.router.navigate([url, { authors: this.authors }]);
  }
}
