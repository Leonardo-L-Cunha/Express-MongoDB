import { books } from '../database/db';
import { BookDto } from '../interfaces/book.interface';

class BookService {
  private books = books;

  async createBook(data: BookDto): Promise<any> {
    this.books.push(data);

    const index = this.books.findIndex((book) => book.id === data.id);

    return this.books[index];
  }

  async readBooks(): Promise<BookDto[]> {
    return this.books;
  }

  async updatedBook(id: number, title: string): Promise<any> {
    const index = this.findBook(id);
    console.log(this.books[index]);
    this.books[index].titulo = title;

    return this.books[index];
  }

  async deleteBook(id: number): Promise<void> {
    const index = this.findBook(id);

    this.books.splice(index, 1);
  }

  private findBook(id: number): number {
    return this.books.findIndex((book) => book.id == id);
  }
}

const bookService = new BookService();

export { bookService };
