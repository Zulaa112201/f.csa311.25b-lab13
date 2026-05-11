import { BookRepository } from '../src/repositories/BookRepository';
import { LoanRepository } from '../src/repositories/LoanRepository';

describe('Library System - Comprehensive Unit Tests', () => {
    let bookRepo: BookRepository;
    let loanRepo: LoanRepository;

    beforeEach(() => {
        bookRepo = new BookRepository();
        loanRepo = new LoanRepository();
    });

    test('1. Should add a new book', async () => {
        const book = { id: '1', title: 'Clean Code', author: 'Robert Martin', isbn: 'ISBN123', isAvailable: true };
        const saved = await bookRepo.save(book);
        expect(saved.title).toBe('Clean Code');
    });

    test('2. Should find book by ID', async () => {
        const book = { id: '1', title: 'Refactoring', author: 'Martin Fowler', isbn: 'ISBN456', isAvailable: true };
        await bookRepo.save(book);
        const found = await bookRepo.findById('1');
        expect(found?.title).toBe('Refactoring');
    });

    test('3. Should update book availability', async () => {
        await bookRepo.save({ id: '1', title: 'A', author: 'B', isbn: 'C', isAvailable: true });
        await bookRepo.updateAvailability('1', false);
        const updated = await bookRepo.findById('1');
        expect(updated?.isAvailable).toBe(false);
    });

    test('4. Should return all books', async () => {
        await bookRepo.save({ id: '1', title: 'A', author: 'B', isbn: 'C', isAvailable: true });
        const all = await bookRepo.findAll();
        expect(all.length).toBeGreaterThan(0);
    });
});