import { Router } from 'express';
import { BookRepository } from '../repositories/BookRepository';
import { LoanRepository } from '../repositories/LoanRepository';

const router = Router();
const bookRepo = new BookRepository();
const loanRepo = new LoanRepository();

router.get('/stats', async (req, res) => {
    const books = await bookRepo.findAll();
    const loans = await loanRepo.findAll();
    
    res.json({
        totalBooks: books.length,
        availableBooks: books.filter(b => b.isAvailable).length,
        activeLoans: loans.filter(l => !l.isReturned).length
    });
});

export default router;