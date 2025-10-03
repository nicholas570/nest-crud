import { Book } from '../entities/book';

export interface IBooksRepository {
  getAll(): Promise<Array<Book>>;
}
