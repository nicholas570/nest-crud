import { Injectable, Inject } from '@nestjs/common';
import type { IBooksRepository } from '../../repositories/books-repository';
import { Book } from 'src/domain/entities/book';

@Injectable()
export class GetAllBooksUseCase {
  constructor(
    @Inject('IBooksRepository')
    private readonly booksRepository: IBooksRepository,
  ) {}

  async execute(): Promise<Book[]> {
    return await this.booksRepository.getAll();
  }
}
