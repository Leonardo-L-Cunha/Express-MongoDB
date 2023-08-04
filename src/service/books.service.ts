import { BookDto, BookDtoUpdate } from '../interfaces/book.interface';
import Books from '../models/books.models';

class BookService {
  private books = Books;

  async createBook(data: BookDto): Promise<BookDto> {
    const newBook: BookDto = new Books();

    Object.assign(newBook, data);

    const book = await this.books.create(newBook);

    return book;
  }

  async readBooks(): Promise<BookDto[]> {
    const books = this.books.find().populate('author');

    return books;
  }

  async readOneBook(id: string): Promise<BookDto> {
    const findBook = await this.books.findById(id).populate('author');

    return findBook!;
  }

  async updatedBook(id: string, data: BookDtoUpdate): Promise<BookDto> {
    const updatedBook = await this.books.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );

    return updatedBook!;
  }

  async deleteBook(id: string): Promise<void> {
    const findBook = await this.books.findByIdAndDelete(id);
  }
}

const bookService = new BookService();

export { bookService };
