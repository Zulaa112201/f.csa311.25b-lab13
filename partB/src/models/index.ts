export interface Book {
    id: string;
    title: string;
    author: string;
    isbn: string;
    isAvailable: boolean;
}

export interface Member {
    id: string;
    name: string;
    email: string;
    memberCode: string;
}

export interface Loan {
    id: string;
    bookId: string;
    memberId: string;
    loanDate: Date;
    isReturned: boolean;
}