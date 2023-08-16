import { NextFunction, Request, Response } from 'express';

import { BookDto, BookDtoUpdate } from '../interfaces/book.interface';
import { Books } from '../models/';
import { NotFound } from '../errors/NotFound';

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
      const books = await Books.find().populate('author');
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
        next(new NotFound('book not found!'));
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

      if (!updatedBook) {
        next(new NotFound('book not found!'));
      }
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
      const book = Books.findByIdAndDelete(id);
      if (!book) {
        next(new NotFound('book not found!'));
      }
      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
  static async listBookFilter(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { publisher, title } = req.query;

      const search: any = {};

      if (publisher) search.publisher = { $regex: publisher, $options: 'i' };
      if (title) search.title = { $regex: title, $options: 'i' };

      const bookResult = await Books.find(search);

      return res.status(200).send(bookResult);
    } catch (error) {
      next(error);
    }
  }
}
