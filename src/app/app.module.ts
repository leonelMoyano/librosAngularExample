import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ng material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

// Components de App
import { AppComponent } from './app.component';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { FormLibroComponent } from './form-libro/form-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoLibrosComponent,
    FormLibroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // ng material
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [
    FormLibroComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
