import { BookAuthorsComponent } from './components/book/book-authors/book-authors.component';
import { DvdFormComponent } from './components/dvd/dvd-form/dvd-form.component';
import { DvdDetailComponent } from './components/dvd/dvd-detail/dvd-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BookComponent } from './components/book/book.component';
import { DvdComponent } from './components/dvd/dvd.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';

const appRoutes: Routes = [
  { path: 'dvds', component: DvdComponent },
  { path: 'dvds/new', component: DvdFormComponent },
  { path: 'dvds/:index', component: DvdDetailComponent },
  {
    path: 'books',
    component: BookComponent,
    children: [
      {
        path: ':index',
        component: BookDetailComponent,
        children: [{ path: 'authors', component: BookAuthorsComponent }],
      },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'dvds' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
