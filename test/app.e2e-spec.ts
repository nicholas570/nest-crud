import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Get all books', () => {
    return request(app.getHttpServer())
      .get('/books')
      .expect(200)
      .expect((res) => {
        const books = res.body as Array<any>;
        expect(books).toHaveLength(3);

        // Test first book
        expect(books[0]).toHaveProperty('id', 1);
        expect(books[0]).toHaveProperty('title', 'Book 1');
        expect(books[0]).toHaveProperty('author', 'Author 1');
        expect(books[0]).toHaveProperty('publishedDate');

        // Test second book
        expect(books[1]).toHaveProperty('id', 2);
        expect(books[1]).toHaveProperty('title', 'Book 2');
        expect(books[1]).toHaveProperty('author', 'Author 2');
        expect(books[1]).toHaveProperty('publishedDate');

        // Test third book
        expect(books[2]).toHaveProperty('id', 3);
        expect(books[2]).toHaveProperty('title', 'Book 3');
        expect(books[2]).toHaveProperty('author', 'Author 3');
        expect(books[2]).toHaveProperty('publishedDate');
      });
  });
});
