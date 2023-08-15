import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { AppError } from '../errors/AppError';
import { RequestError } from '../errors/RequestError';
import { ValidationError } from '../errors/ValidationError';
import { NotFound } from '../errors/NotFound';

export function handleErros(
  error: Error,
  req: Request,
  res: Response,
  _: NextFunction
) {
  if (error instanceof mongoose.Error.CastError) {
    new RequestError().sendRequest(res);
  }

  if (error instanceof mongoose.Error.ValidationError) {
    new ValidationError(error).sendRequest(res);
  }

  if (error instanceof NotFound) {
    error.sendRequest(res);
  }

  new AppError().sendRequest(res);
}
