import { NextFunction, Request, Response } from 'express';
import { RequestError } from '../errors/RequestError';
import { QueryLimit } from '../interfaces/query.interface';

export async function pagination(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    let {
      limit = 5,
      page = 1,
      ordernation = 'title:1',
    } = req.query as unknown as QueryLimit;

    let [sort, order] = ordernation.split(':');

    const NumberOrder = parseInt(order);

    const result = req.result;

    if (limit > 0 && page > 0) {
      const paginationResult = await result
        .find()
        .sort({ [sort]: NumberOrder })
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
