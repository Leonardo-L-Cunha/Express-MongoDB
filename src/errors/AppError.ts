import { NextFunction, Response, Request } from 'express';
import { Error as MongooseError } from 'mongoose';

class AppError extends Error {
  message: string;
  statusCode: number;
  constructor(message: string, statusCode = 400) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

const handleErrors = (
  error: Error,
  req: Request,
  res: Response,
  _: NextFunction
): Response => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  if (error instanceof MongooseError.ValidationError) {
    const validationErrors: { [key: string]: string } = {};

    for (const field in error.errors) {
      validationErrors[field] = error.errors[field].message;
    }

    return res.status(400).json({
      message: 'Erro de validação no(s) campo(s)',
      errors: validationErrors,
    });
  }

  console.error(error);

  return res.status(500).json({ message: 'Internal server error' });
};

export { AppError, handleErrors };
