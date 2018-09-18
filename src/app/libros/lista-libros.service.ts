import { Injectable } from '@angular/core';
import { Book } from './libro';
import { BOOKS } from './libros-mock';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListaLibrosService {
  books: Book[];
  constructor() {
    this.books = BOOKS;
  }

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  saveLibro(book: Book): Observable<Book>  {
    this.books.push(book);
    return of(book);
  }

  removeLibro(book: Book): Observable<Book>  {
    this.books.splice(this.books.indexOf(book), 1);
    return of(book);
  }
}
