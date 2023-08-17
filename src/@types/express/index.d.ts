import * as experss from 'express';

declare global {
  namespace Express {
    interface Request {
      result: any;
    }
  }
}
