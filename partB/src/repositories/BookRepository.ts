import { Book } from '../models';

export class BookRepository {
    private books: Book[] = [];

    async findAll(): Promise<Book[]> {
        return this.books;
    }

    async save(book: Book): Promise<Book> {
        this.books.push(book);
        return book;
    }

    async findById(id: string): Promise<Book | undefined> {
        return this.books.find(b => b.id === id);
    }

    async updateAvailability(id: string, status: boolean): Promise<void> {
        const book = await this.findById(id);
        if (book) book.isAvailable = status;
    }
}