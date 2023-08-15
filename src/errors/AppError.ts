import { Response } from 'express';

class AppError extends Error {
  message: string;
  statusCode: number;
  constructor(message: string = 'Internal server error!', statusCode = 400) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }

  public sendRequest(res: Response): Response {
    return res.status(this.statusCode).json({
      message: this.message,
    });
  }
}

export { AppError };
