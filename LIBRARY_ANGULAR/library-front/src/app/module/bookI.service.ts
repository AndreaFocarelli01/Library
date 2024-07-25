import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "../model/book.model";


export const book_service_token = new InjectionToken<BookServiceI>('book_service_token');

export interface BookServiceI {
    getBooks(): Observable<any>;

    getBooksByISBN(isbn: string): Observable<any>;

    saveBook(book: Book): Observable<any>;

    updateBook(book: Book): Observable<any>;

    deleteBook(isbn: string): Observable<any>;
}