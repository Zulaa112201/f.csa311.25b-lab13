import { Loan } from '../models';

export class LoanRepository {
    private loans: Loan[] = [];

    // Шинээр зээл үүсгэх
    async create(data: Omit<Loan, 'id'>): Promise<Loan> {
        const newLoan: Loan = {
            ...data,
            id: Math.random().toString(36).substring(2, 9)
        };
        this.loans.push(newLoan);
        return newLoan;
    }

    async findActiveLoans(): Promise<Loan[]> {
        // isReturned нь false байвал "Идэвхтэй зээл" гэж үзнэ
        return this.loans.filter(loan => loan.isReturned === false);
    }
}