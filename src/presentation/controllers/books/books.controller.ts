import { Controller, Get, Inject } from '@nestjs/common';
import type { IGetAllBooksUseCase } from '../../../domain/use-cases/books/get-all-books.interface';
import { BookDto } from '../../dtos/book/book.dto';

@Controller('books')
export class BooksController {
  constructor(
    @Inject('IGetAllBooksUseCase')
    private readonly getAllBooksUseCase: IGetAllBooksUseCase,
  ) {}

  @Get()
  async getBooks(): Promise<Array<BookDto>> {
    const books = await this.getAllBooksUseCase.execute();
    return books.map((book) => BookDto.fromEntity(book));
  }
}
