import { Injectable } from '@nestjs/common';
import { Book } from 'src/domain/entities/book';
import { IBooksRepository } from 'src/domain/repositories/books-repository';

@Injectable()
export class BooksRepository implements IBooksRepository {
  getAll(): Promise<Array<Book>> {
    return Promise.resolve([
      new Book(1, 'Book 1', 'Author 1', new Date()),
      new Book(2, 'Book 2', 'Author 2', new Date()),
      new Book(3, 'Book 3', 'Author 3', new Date()),
    ]);
  }
}
