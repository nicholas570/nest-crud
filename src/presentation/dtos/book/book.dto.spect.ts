import { BookDto } from './book.dto';
import { Book } from '../../../domain/entities/book';

describe('BookDto', () => {
  describe('fromEntity', () => {
    it('should create a BookDto from a Book entity', () => {
      const publishedDate = new Date('2023-01-01');
      const bookEntity = new Book(1, 'Test Book', 'Test Author', publishedDate);

      const bookDto = BookDto.fromEntity(bookEntity);

      expect(bookDto).toBeInstanceOf(BookDto);
      expect(bookDto.id).toBe(1);
      expect(bookDto.title).toBe('Test Book');
      expect(bookDto.author).toBe('Test Author');
      expect(bookDto.publishedDate.toISOString()).toBe(
        publishedDate.toISOString(),
      );
    });

    it('should create a new BookDto instance', () => {
      const publishedDate = new Date('2022-06-15');
      const bookEntity = new Book(
        42,
        'Some Book',
        'Some Author',
        publishedDate,
      );

      const bookDto1 = BookDto.fromEntity(bookEntity);
      const bookDto2 = BookDto.fromEntity(bookEntity);

      expect(bookDto1).not.toBe(bookDto2);
      expect(bookDto1).toEqual(bookDto2);
    });

    it('should convert publishedDate to UTC format', () => {
      // Create a date in local timezone
      const localDate = new Date('2023-06-15T14:30:00');
      const bookEntity = new Book(1, 'Test Book', 'Test Author', localDate);

      const bookDto = BookDto.fromEntity(bookEntity);

      // The DTO should have a new Date instance in UTC
      expect(bookDto.publishedDate).not.toBe(localDate);
      expect(bookDto.publishedDate.toISOString()).toBe(localDate.toISOString());
      expect(bookDto.publishedDate instanceof Date).toBe(true);
    });

    it('should handle timezone conversion correctly', () => {
      // Create a date with explicit timezone info
      const dateWithTimezone = new Date('2023-12-25T10:00:00.000Z');
      const bookEntity = new Book(
        999,
        'Christmas Book',
        'Holiday Author',
        dateWithTimezone,
      );

      const bookDto = BookDto.fromEntity(bookEntity);

      expect(bookDto.publishedDate.toISOString()).toBe(
        '2023-12-25T10:00:00.000Z',
      );
      expect(bookDto.publishedDate.getUTCFullYear()).toBe(2023);
      expect(bookDto.publishedDate.getUTCMonth()).toBe(11); // December is month 11
      expect(bookDto.publishedDate.getUTCDate()).toBe(25);
    });

    it('should handle edge case values', () => {
      const publishedDate = new Date('1900-01-01');
      const bookEntity = new Book(0, '', '', publishedDate);

      const bookDto = BookDto.fromEntity(bookEntity);

      expect(bookDto.id).toBe(0);
      expect(bookDto.title).toBe('');
      expect(bookDto.author).toBe('');
      expect(bookDto.publishedDate.toISOString()).toBe(
        publishedDate.toISOString(),
      );
    });

    it('should create new Date instance (not preserve reference)', () => {
      const publishedDate = new Date('2024-03-15T10:30:00.000Z');
      const bookEntity = new Book(
        123,
        'Date Test Book',
        'Date Test Author',
        publishedDate,
      );

      const bookDto = BookDto.fromEntity(bookEntity);

      // Should create a new Date instance, not preserve the reference
      expect(bookDto.publishedDate).not.toBe(publishedDate);
      expect(bookDto.publishedDate.getTime()).toBe(publishedDate.getTime());
    });
  });
});
