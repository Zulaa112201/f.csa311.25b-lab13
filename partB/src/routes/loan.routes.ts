import { Router, Request, Response } from 'express';
import { BookRepository } from '../repositories/BookRepository';
import { LoanRepository } from '../repositories/LoanRepository';

const router = Router();
const bookRepo = new BookRepository();
const loanRepo = new LoanRepository();

router.post('/issue', async (req: Request, res: Response) => {
    try {
        const { bookId, memberId } = req.body;

        // 1. Ном байгаа эсэхийг шалгах
        const book = await bookRepo.findById(bookId);

        // Robustness Check: Ном байхгүй эсвэл олгогдсон байгаа эсэхийг нягтлах
        if (!book) {
            return res.status(404).json({ error: "Уучлаарай, ийм ID-тай ном бүртгэлгүй байна." });
        }

        if (!book.isAvailable) {
            return res.status(400).json({ error: "Энэ ном аль хэдийн олгогдсон байна." });
        }

        // 2. Номын төлөвийг шинэчлэх (Олгогдсон болгох)
        await bookRepo.updateAvailability(bookId, false);

        // 3. Зээлийн бүртгэл үүсгэх
        // ЗАСВАР: new Date().toISOString() ашиглан string төрөл рүү хөрвүүлэв
        const loan = await loanRepo.create({ 
            bookId, 
            memberId, 
            loanDate: new Date().toISOString(), 
            isReturned: false 
        });

        return res.status(201).json(loan);

    } catch (error) {
        // Системийн алдааг барих (Robustness)
        console.error("Loan Issue Error:", error);
        return res.status(500).json({ error: "Дотоод алдаа гарлаа. Та дараа дахин оролдоно уу." });
    }
});

export default router;