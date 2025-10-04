import { Book } from 'src/domain/entities/book';

export class BookDto {
  id: number;
  title: string;
  author: string;
  publishedDate: Date;

  static fromEntity(entity: Book): BookDto {
    const dto = new BookDto();
    dto.id = entity.id;
    dto.title = entity.title;
    dto.author = entity.author;
    dto.publishedDate = entity.publishedDate;
    return dto;
  }
}
