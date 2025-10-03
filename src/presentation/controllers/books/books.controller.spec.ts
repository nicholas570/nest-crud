import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { GetAllBooksUseCase } from '../../../domain/use-cases/books/get-all-books-use-case';
import { Book } from '../../../domain/entities/book';

describe('BooksController', () => {
  let controller: BooksController;
  let getAllBooksUseCase: GetAllBooksUseCase;

  beforeEach(async () => {
    const mockBooks = [
      new Book(1, 'Test Book 1', 'Test Author 1', new Date()),
      new Book(2, 'Test Book 2', 'Test Author 2', new Date()),
      new Book(3, 'Test Book 3', 'Test Author 3', new Date()),
    ];

    const mockGetAllBooksUseCase = {
      execute: jest.fn().mockResolvedValue(mockBooks),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [
        {
          provide: GetAllBooksUseCase,
          useValue: mockGetAllBooksUseCase,
        },
      ],
    }).compile();

    controller = module.get<BooksController>(BooksController);
    getAllBooksUseCase = module.get<GetAllBooksUseCase>(GetAllBooksUseCase);
  });

  it('should return an array of books', async () => {
    const result = await controller.getBooks();
    expect(result).toHaveLength(3);
    expect(getAllBooksUseCase.execute).toHaveBeenCalledTimes(1);
  });
});
