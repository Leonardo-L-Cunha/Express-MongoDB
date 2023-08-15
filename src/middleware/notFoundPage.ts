import { NextFunction, Request, Response } from 'express';
import { NotFound } from '../errors/NotFound';

export function notFoundPage(req: Request, res: Response, next: NextFunction) {
  const erro404 = new NotFound();
  next(erro404);
}
