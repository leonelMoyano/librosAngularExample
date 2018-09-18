import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListaLibrosService } from '../libros/lista-libros.service';
import { Book } from '../libros/libro';

@Component({
  selector: 'app-form-libro',
  templateUrl: './form-libro.component.html',
  styleUrls: ['./form-libro.component.scss']
})
export class FormLibroComponent implements OnInit {
  book: Book;

  // Validators
  bookForm = new FormGroup({
    name: new FormControl('', Validators.required),
    editorial: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    edition: new FormControl('', [Validators.pattern('[0-9]*'), Validators.required]),
  });

  constructor(
    private librosService: ListaLibrosService,
    public dialogRef: MatDialogRef<FormLibroComponent>) { }


  ngOnInit() {
    this.book = new Book();
  }

  onSubmit() {
    this.librosService.saveLibro(this.book);
    this.dialogRef.close();
  }
}
