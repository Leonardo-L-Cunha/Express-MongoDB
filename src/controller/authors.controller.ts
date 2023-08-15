import { NextFunction, Request, Response } from 'express';
import { AuthorDto, AuthorDtoUpdate } from '../interfaces/author.inteface';
import { Authors } from '../models/';
import { NotFound } from '../errors/NotFound';

export class AuthorsController {
  static async createAuthor(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const data: AuthorDto = req.body;

      const newauthor: AuthorDto = new Authors();

      Object.assign(newauthor, data);

      const author = await Authors.create(newauthor);

      return res.status(201).json(author);
    } catch (error) {
      next(error);
    }
  }

  static async readAuthor(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const authors = await Authors.find();
      return res.send(authors);
    } catch (error) {
      next(error);
    }
  }

  static async readOneAuthor(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const id: string = req.params.id;

      const author: AuthorDto | null = await Authors.findById(id);

      if (!author) {
        next(new NotFound('author not found!'));
      }

      return res.send(author);
    } catch (error) {
      next(error);
    }
  }

  static async updatedAuthor(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const id: string = req.params.id;
      const data: AuthorDtoUpdate = req.body;

      const updatedAuthor = await Authors.findByIdAndUpdate(
        id,
        { $set: data },
        { new: true }
      );

      if (!updatedAuthor) {
        next(new NotFound('author not found!'));
      }

      return res.send(updatedAuthor);
    } catch (error) {
      next(error);
    }
  }

  static async deleteAuthor(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const id: string = req.params.id;

      const author = await Authors.findByIdAndDelete(id);

      if (!author) {
        next(new NotFound('author not found!'));
      }

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
