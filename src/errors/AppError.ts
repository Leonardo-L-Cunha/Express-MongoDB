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

export { AppError };
