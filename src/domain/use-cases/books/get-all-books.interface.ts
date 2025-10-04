import { Book } from '../../entities/book';

export interface IGetAllBooksUseCase {
  execute(): Promise<Book[]>;
}
