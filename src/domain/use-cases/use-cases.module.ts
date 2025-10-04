import { Module } from '@nestjs/common';
import { GetAllBooksUseCase } from './books/get-all-books.use.case';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  providers: [
    {
      provide: 'IGetAllBooksUseCase',
      useClass: GetAllBooksUseCase,
    },
  ],
  exports: ['IGetAllBooksUseCase'],
})
export class UseCasesModule {}
