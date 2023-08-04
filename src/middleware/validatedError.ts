import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { AppError } from '../errors/AppError';

function validatedErro(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof mongoose.Error.CastError) {
    throw new AppError('Credentials is not valid.', 400);
  } else {
    res.status(500).send({ message: 'internal server error!' });
  }

  next();
}

export default validatedErro;
