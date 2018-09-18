import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';

import { ListaLibrosService } from '../libros/lista-libros.service';
import { FormLibroComponent } from '../form-libro/form-libro.component';
import { Book } from '../libros/libro';

@Component({
  selector: 'app-listado-libros',
  templateUrl: './listado-libros.component.html',
  styleUrls: ['./listado-libros.component.scss']
})
export class ListadoLibrosComponent implements OnInit {
  displayedColumns: string[] = ['name', 'editorial', 'author', 'edition'];
  dataSource: MatTableDataSource<Book>;

  constructor(
    private librosService: ListaLibrosService,
    public modal: MatDialog) {
      this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getHeroes();
    this.dataSource.filterPredicate = this.matchFilter;
  }

  getHeroes(): void {
    this.librosService.getBooks()
    .subscribe(libros => this.dataSource.data = libros);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  matchFilter(book: Book, filterValue: string) {
    return (book.name + book.author).trim().toLowerCase().includes(filterValue);
  }

  deleteBook(book: Book) {
    this.librosService.removeLibro(book);
    this.getHeroes();
  }

  openDialog() {
    const modalRef = this.modal.open(FormLibroComponent);
    modalRef.afterClosed().subscribe(result => {
      this.getHeroes();
    });
  }
}
