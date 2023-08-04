import { Request, Response } from 'express';
import { bookService } from '../service/books.service';
import { BookDto, BookDtoUpdate } from '../interfaces/book.interface';

class BooksController {
  async createBook(req: Request, res: Response): Promise<Response> {
    const data: BookDto = req.body;

    const newUser = await bookService.createBook(data);

    return res.status(201).json(newUser);
  }

  async readBook(req: Request, res: Response): Promise<Response> {
    const books = await bookService.readBooks();
    return res.send(books);
  }

  async readOneBook(req: Request, res: Response): Promise<Response> {
    const id: string = req.params.id;

    const book: BookDto = await bookService.readOneBook(id);

    return res.send(book);
  }

  async updatedBook(req: Request, res: Response): Promise<Response> {
    const id: string = req.params.id;
    const data: BookDtoUpdate = req.body;

    const updatedBook = await bookService.updatedBook(id, data);

    return res.send(updatedBook);
  }

  async deleteBook(req: Request, res: Response): Promise<Response> {
    const id: string = req.params.id;

    await bookService.deleteBook(id);

    return res.status(204).send();
  }
}

const booksController = new BooksController();

export { booksController };
