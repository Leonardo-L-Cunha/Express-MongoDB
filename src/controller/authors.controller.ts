import { Request, Response } from 'express';
import { AuthorDto, AuthorDtoUpdate } from '../interfaces/author.inteface';
import Authors from '../models/author.models';
import mongoose from 'mongoose';

export class AuthorsController {
  static async createAuthor(req: Request, res: Response): Promise<Response> {
    try {
      const data: AuthorDto = req.body;

      const newauthor: AuthorDto = new Authors();

      Object.assign(newauthor, data);

      const author = await Authors.create(newauthor);

      return res.status(201).json(author);
    } catch (error) {
      return res.status(500);
    }
  }

  static async readAuthor(req: Request, res: Response): Promise<Response> {
    try {
      const authors = await Authors.find();
      return res.send(authors);
    } catch (error) {
      return res.status(500);
    }
  }

  static async readOneAuthor(req: Request, res: Response): Promise<Response> {
    try {
      const id: string = req.params.id;

      const author: AuthorDto | null = await Authors.findById(id);

      if (!author) {
        return res.status(404).json({ message: 'Book not found' });
      }

      return res.send(author);
    } catch (error) {
      if (error instanceof mongoose.Error.CastError) {
        return res.status(400).json({ message: 'invalid credentials' });
      }
      return res.status(500);
    }
  }

  static async updatedAuthor(req: Request, res: Response): Promise<Response> {
    try {
      const id: string = req.params.id;
      const data: AuthorDtoUpdate = req.body;

      const updatedAuthor = await Authors.findByIdAndUpdate(
        id,
        { $set: data },
        { new: true }
      );

      return res.send(updatedAuthor);
    } catch (error) {
      return res.status(500);
    }
  }

  static async deleteAuthor(req: Request, res: Response): Promise<Response> {
    try {
      const id: string = req.params.id;

      await Authors.findByIdAndDelete(id);

      return res.status(204).send();
    } catch (error) {
      return res.status(500);
    }
  }
}
