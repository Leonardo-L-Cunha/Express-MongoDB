import { Request, Response } from 'express';
import { bookService } from '../service/books.service';
import { BookDto } from '../interfaces/book.interface';

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
    return res.send();
  }

  async updatedBook(req: Request, res: Response): Promise<Response> {
    const id: number = parseInt(req.params.id);
    const data = req.body;

    const updatedBook = await bookService.updatedBook(id, data.titulo);

    return res.send(updatedBook);
  }

  async deleteBook(req: Request, res: Response): Promise<Response> {
    const id: number = parseInt(req.params.id);

    await bookService.deleteBook(id);

    return res.status(204).send();
  }
}

const booksController = new BooksController();

export { booksController };
