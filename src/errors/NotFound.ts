import { AppError } from './AppError';

export class NotFound extends AppError {
  constructor(message: string = 'Page not found') {
    super(message, 404);
  }
}
