import { Module } from '@nestjs/common';
import { GetAllBooksUseCase } from './books/get-all-books-use-case';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  providers: [GetAllBooksUseCase],
  exports: [GetAllBooksUseCase],
})
export class UseCasesModule {}
