import { books } from '../database/db';

class BookService {
  private books = books;

  async createBook(data: any): Promise<any> {
    this.books.push(data);

    const index = this.books.findIndex((book) => book.id === data.id);

    return this.books[index];
  }

  async readBooks(): Promise<any[]> {
    return this.books;
  }
}

const bookService = new BookService();

export { bookService };
