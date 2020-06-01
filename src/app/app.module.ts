import { ElectronicsModule } from './components/electronics/electronics.module';
import { DvdDetailComponent } from './components/dvd/dvd-detail/dvd-detail.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookComponent } from './components/book/book.component';
import { DvdComponent } from './components/dvd/dvd.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DvdFormComponent } from './components/dvd/dvd-form/dvd-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
import { BookAuthorsComponent } from './components/book/book-authors/book-authors.component';

// const appRoutes: Routes = [
//   { path: 'dvd', component: DvdComponent },
//   { path: 'books', component: BookComponent },
//   { path: '', pathMatch: 'full', redirectTo: 'dvd' },
//   { path: '**', component: PageNotFoundComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    DvdComponent,
    PageNotFoundComponent,
    DvdDetailComponent,
    DvdFormComponent,
    BookDetailComponent,
    BookAuthorsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    // RouterModule.forRoot(appRoutes),
    ElectronicsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
