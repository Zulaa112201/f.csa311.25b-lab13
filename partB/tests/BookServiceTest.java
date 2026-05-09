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