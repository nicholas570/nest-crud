import { Controller, Get } from '@nestjs/common';
import { Book } from 'src/domain/entities/book';
import { GetAllBooksUseCase } from 'src/domain/use-cases/books/get-all-books-use-case';

@Controller('books')
export class BooksController {
  constructor(private readonly getAllBooksUseCase: GetAllBooksUseCase) {}

  @Get()
  async getBooks(): Promise<Array<Book>> {
    return await this.getAllBooksUseCase.execute();
  }
}
