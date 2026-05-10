package com.library.service;

import com.library.model.Book;
import com.library.model.Loan;
import com.library.model.Member;
import com.library.repository.BookRepository;
import com.library.repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;

@Service
public class LoanService {
    @Autowired
    private LoanRepository loanRepository;
    @Autowired
    private BookRepository bookRepository;

    public Loan issueBook(Book book, Member member) {
        if (!book.isAvailable()) {
            throw new RuntimeException("Ном олгох боломжгүй, одоогоор өөр хүнд байна.");
        }
        
        book.setAvailable(false);
        bookRepository.save(book);
        
        Loan loan = new Loan(book, member, LocalDate.now());
        return loanRepository.save(loan);
    }
}