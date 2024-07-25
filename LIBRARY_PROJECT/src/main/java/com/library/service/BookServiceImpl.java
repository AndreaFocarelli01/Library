package com.library.service;

import com.library.entity.Book;
import com.library.repository.BookRepository;
import jakarta.persistence.EntityNotFoundException;
import org.hibernate.action.internal.EntityActionVetoException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BookServiceImpl implements  BookService{
    //injection
    private BookRepository bookRepository;

    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public Book insertOrUpdate(Book book) {
        try{
            bookRepository.save(book);
        }
        catch(Exception ex){
            ex.printStackTrace();
        }
        return book;
    }

    @Override
    public List<Book> getAllBooks() {
        List<Book> books = new ArrayList<>();
        try{
            books =bookRepository.findAll();
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return books;
    }

    @Override
    public Book getBooksByID(String isbn) {
        return bookRepository.findById(isbn).orElseThrow(()-> new EntityNotFoundException("Errore non sono riuscito a trovare il libro"));
    }

    @Override
    public Map<String, Boolean> removeBookById(String isbn) {
        try{
            bookRepository.deleteById(isbn);
        }
        catch (Exception ex){
            ex.printStackTrace();
        }
        Map<String, Boolean> mappa = new HashMap<>();
        mappa.put("eliminato il codice numero: " + isbn, true);
        return mappa;
    }
}
