package com.library.controller;

import com.library.entity.Book;
import com.library.service.BookService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/rest/api/books")
public class BookController {
    //injection
    private BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    //GET /rest/api/books
    @GetMapping
    public List<Book> getBooks() {
        return bookService.getAllBooks();
    }

    //GET /rest/api/book/{isbn}
    @GetMapping("/{isbn}")
    public Book getBookById(@PathVariable String isbn){
        return bookService.getBooksByID(isbn);
    }

    //POST
    @PostMapping
    public Book save(@Valid @RequestBody Book book){
        return bookService.insertOrUpdate(book);
    }

    //PUT
    @PutMapping
    public Book update(Book book){
        return bookService.insertOrUpdate(book);
    }

    //DELETE
    @DeleteMapping("/{isbn}")
    public Map<String, Boolean> deleteBook(@PathVariable String isbn){
        return bookService.removeBookById(isbn);
    }


}
