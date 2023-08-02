import { Request, Response } from 'express';
import { bookService } from '../service/books.service';

class BooksController {
  async createBook(req: Request, res: Response): Promise<Response> {
    const data: any = req.body;

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
    return res.send();
  }

  async deleteBook(req: Request, res: Response): Promise<Response> {
    return res.send();
  }
}

const booksController = new BooksController();

export { booksController };
