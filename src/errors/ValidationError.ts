import mongoose from 'mongoose';
import { RequestError } from './RequestError';

export class ValidationError extends RequestError {
  constructor(error: mongoose.Error.ValidationError) {
    const errorMensage = Object.values(error.errors)
      .map((error) => error.message)
      .join(' ; ');
    super(errorMensage);
  }
}
