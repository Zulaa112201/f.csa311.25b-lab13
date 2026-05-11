import { Router, Request, Response } from 'express';
import { BookRepository } from '../repositories/BookRepository';
import { Book } from '../models';

const router = Router();
const bookRepo = new BookRepository();

/**
 * @route   GET /api/books
 * @desc    Бүх номын жагсаалтыг авах
 */
router.get('/', async (req: Request, res: Response) => {
    try {
        const books = await bookRepo.findAll();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: "Номын жагсаалт авахад алдаа гарлаа." });
    }
});

/**
 * @route   GET /api/books/:id
 * @desc    ID-аар нь нэг номын мэдээлэл авах
 */
router.get('/:id', async (req: Request, res: Response) => {
    const book = await bookRepo.findById(req.params.id);
    if (!book) {
        return res.status(404).json({ message: "Ном олдсонгүй." });
    }
    res.json(book);
});

/**
 * @route   POST /api/books
 * @desc    Шинэ ном бүртгэх
 */
router.post('/', async (req: Request, res: Response) => {
    const { title, author, isbn } = req.body;

    // Lec12 Robustness: Мэдээлэл дутуу эсэхийг шалгах
    if (!title || !author || !isbn) {
        return res.status(400).json({ message: "Гарчиг, зохиолч, ISBN заавал шаардлагатай." });
    }

    const newBook: Book = {
        id: Math.random().toString(36).substring(2, 9),
        title,
        author,
        isbn,
        isAvailable: true
    };

    const savedBook = await bookRepo.save(newBook);
    res.status(201).json(savedBook);
});

/**
 * @route   DELETE /api/books/:id
 * @desc    Ном устгах (Жишээ)
 */
router.delete('/:id', async (req: Request, res: Response) => {
    // Устгах логик энд бичигдэнэ
    res.json({ message: `${req.params.id} ID-тай ном амжилттай устлаа.` });
});

export default router;