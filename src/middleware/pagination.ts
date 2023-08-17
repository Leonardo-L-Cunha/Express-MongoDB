import { NextFunction, Request, Response } from 'express';
import { RequestError } from '../errors/RequestError';

export async function pagination(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    let { limit = 5, page = 1, ordernation = 'title:1' }: any = req.query;

    let [sort, order] = ordernation.split(':');
    limit = parseInt(limit);
    page = parseInt(page);
    order = parseInt(order);

    const result = req.result;

    if (limit > 0 && page > 0) {
      const paginationResult = await result
        .find()
        .sort({ [sort]: order })
        .skip((page - 1) * limit)
        .limit(limit);

      return res.send(paginationResult);
    } else {
      next(new RequestError());
    }
  } catch (error) {
    next(error);
  }
}
