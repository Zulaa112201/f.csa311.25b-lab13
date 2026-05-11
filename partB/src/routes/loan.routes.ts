import { Router } from 'express';
import { BookRepository } from '../repositories/BookRepository';
import { LoanRepository } from '../repositories/LoanRepository';

const router = Router();
const bookRepo = new BookRepository();
const loanRepo = new LoanRepository();

router.post('/issue', async (req, res) => {
    const { bookId, memberId } = req.body;
    const book = await bookRepo.findById(bookId);

    if (!book || !book.isAvailable) {
        return res.status(400).json({ error: "Ном олгох боломжгүй байна." });
    }

    await bookRepo.updateAvailability(bookId, false);
    const loan = await loanRepo.create({ bookId, memberId, loanDate: new Date(), isReturned: false });
    
    res.status(201).json(loan);
});

export default router;