import { NextFunction, Request, Response } from 'express';

import { BookDto, BookDtoUpdate } from '../interfaces/book.interface';
import Books from '../models/books.models';

export class BooksController {
  static async createBook(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const data: BookDto = req.body;

      const newBook: BookDto = new Books();

      Object.assign(newBook, data);

      const book = await Books.create(newBook);

      return res.status(201).json(book);
    } catch (error) {
      next(error);
    }
  }

  static async readBook(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const books = await Books.find();
      return res.send(books);
    } catch (error) {
      next(error);
    }
  }

  static async readOneBook(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const id: string = req.params.id;

      const book: BookDto = await Books.findById(id).populate('author');

      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }

      return res.send(book);
    } catch (error) {
      next(error);
    }
  }

  static async updatedBook(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const id: string = req.params.id;
      const data: BookDtoUpdate = req.body;

      const updatedBook = await Books.findByIdAndUpdate(
        id,
        { $set: data },
        { new: true }
      );

      return res.send(updatedBook);
    } catch (error) {
      next(error);
    }
  }

  static async deleteBook(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const id: string = req.params.id;
      Books.findByIdAndDelete(id);

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
