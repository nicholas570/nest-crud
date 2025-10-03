export class Book {
  id: number;
  title: string;
  author: string;
  publishedDate: Date;

  constructor(id: number, title: string, author: string, publishedDate: Date) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.publishedDate = publishedDate;
  }
}
