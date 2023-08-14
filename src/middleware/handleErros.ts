import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

export function handleErros(
  error: Error,
  req: Request,
  res: Response,
  _: NextFunction
) {
  if (error instanceof mongoose.Error.CastError) {
    return res.status(400).json({ message: 'invalid credentials' });
  }

  if (error instanceof mongoose.Error.ValidationError) {
    const errorMensage = Object.values(error.errors).map(
      (error) => error.message
    );
    return res.status(400).json({ message: errorMensage });
  }
  return res.status(500);
}
