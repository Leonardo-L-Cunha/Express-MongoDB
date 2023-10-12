import * as experss from 'express';
import { BookDto } from '../../interfaces/book.interface';

declare global {
  namespace Express {
    interface Request {
      result: BookDto | AuthorDto;
      user: {
        id: string;
      };
    }
  }
}
