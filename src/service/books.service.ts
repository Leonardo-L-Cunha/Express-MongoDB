import { BookDto, BookDtoUpdate } from '../interfaces/book.interface';
import books from '../models/books.models';

class BookService {
  private books = books;

  async createBook(data: BookDto): Promise<BookDto> {
    const newBook: BookDto = new books();

    Object.assign(newBook, data);

    const book = await books.create(newBook);

    return book;
  }

  async readBooks(): Promise<BookDto[]> {
    const books = this.books.find();

    return books;
  }

  async updatedBook(id: string, data: BookDtoUpdate): Promise<BookDto> {
    const updatedBook = await this.books.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );

    return updatedBook;
  }
}

const bookService = new BookService();

export { bookService };
