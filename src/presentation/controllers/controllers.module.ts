import { Module } from '@nestjs/common';
import { BooksController } from './books/books.controller';
import { UseCasesModule } from '../../domain/use-cases/use-cases.module';

@Module({
  imports: [UseCasesModule],
  controllers: [BooksController],
})
export class ControllersModule {}
