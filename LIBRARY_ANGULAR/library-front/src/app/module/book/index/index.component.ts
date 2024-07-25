import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../../model/book.model';
import { book_service_token, BookServiceI } from '../../bookI.service';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  providers: [{ provide: book_service_token, useClass: BookService }],
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {

  //mi servono array di libri per la creazione 
  books: Book[] = [];

  //injection del servizio richiesto
  private bookService = inject<BookServiceI>(book_service_token);

  //per prendere il libro normalmente 
  getBook(): void {
    this.bookService.getBooks().subscribe({
      //NEXT
      next: (res) => {
        this.books = res;
        console.log('Libro inserito correttamente', res);
      },
      //ERROR 
      error: (err) => {
        console.log("Errore inserimento del libro richiesto", err);
      }
    })
  }


  //per eliminare il lubro
  removeBook(isbn: string): void {
    this.bookService.deleteBook(isbn).subscribe(res => {
      console.log("Eliminato il libro:" + res)
      this.getBook();
    })
  }

  ngOnInit(): void {
    this.getBook();
  }

}
