import { Loan } from '../models';

export class LoanRepository {
    private loans: Loan[] = [];

    async create(loan: Omit<Loan, 'id'>): Promise<Loan> {
        const newLoan: Loan = {
            ...loan,
            id: Math.random().toString(36).substring(2, 9),
        };
        this.loans.push(newLoan);
        return newLoan;
    }

    async findAll(): Promise<Loan[]> {
        return this.loans;
    }

    async findByMemberId(memberId: string): Promise<Loan[]> {
        return this.loans.filter(l => l.memberId === memberId);
    }
}