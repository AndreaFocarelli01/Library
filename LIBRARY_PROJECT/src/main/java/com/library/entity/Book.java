package com.library.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.io.Serializable;

@Entity
public class Book implements Serializable {
    @Id
    @Column(length = 13, name = "ISBN")
    private String isbn;     //primary key

    @Column(length = 30, nullable = false)
    private String title;

    @Column(length = 30, nullable = false)
    private String genre;

    @Column(nullable = false)
    private Boolean published;


    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Boolean getPublished() {
        return published;
    }

    public void setPublished(Boolean published) {
        this.published = published;
    }

    protected Book() {
    }

    public Book(String isbn, String title, String genre, Boolean published) {
        this.isbn = isbn;
        this.title = title;
        this.genre = genre;
        this.published = published;
    }
}
