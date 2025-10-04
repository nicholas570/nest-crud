import { Injectable } from '@nestjs/common';
import { Book } from '../../domain/entities/book';
import { IBooksRepository } from '../../domain/repositories/books.repository';

@Injectable()
export class BooksRepository implements IBooksRepository {
  private books: Book[] = [
    new Book(1, 'Book 1', 'Author 1', new Date('2023-01-01T10:00:00Z')),
    new Book(2, 'Book 2', 'Author 2', new Date('2023-02-01T15:30:00Z')),
    new Book(3, 'Book 3', 'Author 3', new Date('2023-03-01T08:45:00Z')),
  ];

  getAll(): Promise<Array<Book>> {
    return Promise.resolve(this.books);
  }

  save(book: Book): Promise<Book> {
    const utcBook = new Book(
      book.id,
      book.title,
      book.author,
      this.ensureUtcDate(book.publishedDate),
    );

    const existingBook = this.books.find((b) => b.id === book.id);
    if (existingBook) {
      this.books[this.books.indexOf(existingBook)] = utcBook;
    } else {
      this.books.push(utcBook);
    }

    return Promise.resolve(utcBook);
  }

  private ensureUtcDate(date: Date): Date {
    return new Date(date.toISOString());
  }
}
