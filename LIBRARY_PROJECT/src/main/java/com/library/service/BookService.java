package com.library.service;

import com.library.entity.Book;
import java.util.List;
import java.util.Map;

public interface BookService {

    /*
    Controllo Inserimento e Aggiornamento di un Book
    Controllo recupero di tutti i Book
    Controllo recupero di un Book per chiave primaria (isbn)
    Controllo eliminazione di un Book per chiave primaria
    * */

    //INSERT or UPDATE
    public Book insertOrUpdate(Book book);
    //GET all books
    public List<Book> getAllBooks();
    //GET all books by ID = ISBN
    public Book getBooksByID(String isbn);
    //DELETE
    public Map<String, Boolean> removeBookById(String isbn);
}
