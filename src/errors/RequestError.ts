import { AppError } from './AppError';

export class RequestError extends AppError {
  constructor(message: string = 'Invalid credetials') {
    super(message, 400);
  }
}
