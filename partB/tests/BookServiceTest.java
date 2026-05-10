package com.library;

import com.library.model.Book;
import com.library.service.BookService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class BookServiceTest {

    @Autowired
    private BookService bookService;

    @Test
    void testAddBook() {
        Book book = new Book("Clean Code", "Robert Martin", "12345");
        Book saved = bookService.addBook(book);
        assertNotNull(saved.getId());
    }

    @Test
    void testAvailabilityOnNewBook() {
        Book book = new Book("AI Construction", "Author", "6789");
        assertTrue(book.isAvailable());
    }

    @Test
    void testGetAllBooks() {
        assertNotNull(bookService.getAllBooks());
    }
}

@Test
    void testBookISBNLength() {
        Book book = new Book("Test Title", "Author", "ISBN-12345");
        assertEquals(10, book.getIsbn().length());
    }

    @Test
    void testGetBookById() {
        Book book = new Book("Java Basics", "Instructor", "999");
        Book saved = bookService.addBook(book);
        assertNotNull(bookService.getBookById(saved.getId()));
    }

    @Test
    void testDeleteBook() {
        Book book = new Book("To be deleted", "Author", "000");
        Book saved = bookService.addBook(book);
        bookService.deleteBook(saved.getId());
        assertNull(bookService.getBookById(saved.getId()));
    }

    @Test
    void testBookAvailabilityToggle() {
        Book book = new Book();
        book.setAvailable(false);
        assertFalse(book.isAvailable());
    }