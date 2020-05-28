import { map } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-authors',
  templateUrl: './book-authors.component.html',
  styleUrls: ['./book-authors.component.scss'],
})
export class BookAuthorsComponent implements OnInit {
  authors$: Observable<string[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.authors$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('authors').split(','))
    );
  }
}
