import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Book } from '../../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  //url padre, associato al mio sito 
  private apiURL = "http://localhost:8080/rest/api/books";

  //specifica del formato con la quale operiamo i dati dal DB
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //costruttore necessario per le chiamare REST (GET,...)
  constructor(private httpClient: HttpClient) { }

  //implementazione dei metodi effettivi


  //GET classico 
  getBooks(): Observable<any> {
    return this.httpClient.get(this.apiURL).pipe(catchError(this.errorHandler));
  }

  //GET by Code
  getBooksByISBN(isbn: string): Observable<any> {
    return this.httpClient.get(this.apiURL + '/' + isbn).pipe(catchError(this.errorHandler));
  }

  //POST
  saveBook(book: Book): Observable<any> {
    return this.httpClient.post(this.apiURL, JSON.stringify(book), this.httpOptions).pipe(catchError(this.errorHandler));
  }

  //PUT
  updateBook(book: Book): Observable<any> {
    return this.httpClient.put(this.apiURL, JSON.stringify(book), this.httpOptions).pipe(catchError(this.errorHandler));
  }

  //DELETE
  deleteBook(isbn: string): Observable<any> {
    return this.httpClient.delete(this.apiURL + '/' + isbn).pipe(catchError(this.errorHandler));
  }


  //metodo per la gestione delle eventuali eccezioni derivanti da erroi delle chiamate REST
  errorHandler(exception: any) {

    let errorMessage = '';

    if (exception.error instanceof ErrorEvent) {
      errorMessage = exception.error.message;
    } else {
      errorMessage = "Error Code: ${ error.status } \nMessage: ${ error.message }";
    }
    return throwError(() => new Error(errorMessage));
  }
}
