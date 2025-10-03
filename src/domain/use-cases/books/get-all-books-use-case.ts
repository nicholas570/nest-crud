import { Injectable, Inject } from '@nestjs/common';
import type { IBooksRepository } from '../../repositories/books-repository';
import { Book } from '../../entities/book';

@Injectable()
export class GetAllBooksUseCase {
  constructor(
    @Inject('IBooksRepository')
    private readonly booksRepository: IBooksRepository,
  ) {}

  execute = async (): Promise<Book[]> => {
    return await this.booksRepository.getAll();
  };
}
