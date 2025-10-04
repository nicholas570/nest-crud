import { Injectable, Inject } from '@nestjs/common';
import type { IBooksRepository } from '../../repositories/books.repository';
import { Book } from '../../entities/book';
import { IGetAllBooksUseCase } from './get-all-books.interface';

@Injectable()
export class GetAllBooksUseCase implements IGetAllBooksUseCase {
  constructor(
    @Inject('IBooksRepository')
    private readonly booksRepository: IBooksRepository,
  ) {}

  execute = async (): Promise<Book[]> => {
    return await this.booksRepository.getAll();
  };
}
