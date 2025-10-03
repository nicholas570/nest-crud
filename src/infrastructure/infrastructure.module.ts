import { Module } from '@nestjs/common';
import { BooksRepository } from './books/books-repository';

@Module({
  providers: [
    {
      provide: 'IBooksRepository',
      useClass: BooksRepository,
    },
  ],
  exports: ['IBooksRepository'],
})
export class InfrastructureModule {}
