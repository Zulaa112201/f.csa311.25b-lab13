import { BookRepository } from '../src/repositories/BookRepository';
import { LoanRepository } from '../src/repositories/LoanRepository';
import { MemberRepository } from '../src/repositories/MemberRepository';

describe('Library System - Comprehensive Unit Tests', () => {
    let bookRepo: BookRepository;
    let loanRepo: LoanRepository;
    let memberRepo: MemberRepository;

    beforeEach(() => {
        bookRepo = new BookRepository();
        loanRepo = new LoanRepository();
        memberRepo = new MemberRepository();
    });

    // ... (Өмнөх 1-4 тестүүд) ...

    test('7. Should handle non-existent member', async () => {
        const found = await memberRepo.findByCode('NONE');
        expect(found).toBeUndefined();
    });

    test('8. Should create a loan record', async () => {
        // АНХААР: LoanRepository.create биш loanRepo.create гэж дуудна
        const loan = await loanRepo.create({
            bookId: '1',
            memberId: 'M1',
            loanDate: new Date().toISOString(),
            isReturned: false
        });
        expect(loan.id).toBeDefined();
    });

    test('9. Should check active loans', async () => {
        await loanRepo.create({
            bookId: '1',
            memberId: 'M1',
            loanDate: new Date().toISOString(),
            isReturned: false
        });
        const active = await loanRepo.findActiveLoans();
        expect(active.length).toBe(1);
    });

    test('10. Should handle empty book title (Robustness)', async () => {
        const book = { id: '2', title: '', author: 'Unknown', isbn: '000', isAvailable: true };
        const saved = await bookRepo.save(book);
        expect(saved.title).toBe('');
    });
});