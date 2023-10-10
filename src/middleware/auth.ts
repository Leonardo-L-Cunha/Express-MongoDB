import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import 'dotenv/config';
import { AppError } from '../errors/AppError';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token: string | undefined = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: 'Missing token',
    });
  }

  const [, acessToken] = token.split(' ');

  try {
    verify(acessToken, process.env.SECRET_KEY!, (error, decoded: any) => {
      if (error) {
        throw new AppError(error.message, 401);
      }

      req.user = {
        id: decoded.id,
        supervisor: decoded.supervisor,
      };
      return next();
    });
  } catch (error) {
    return res.status(401).json({
      message: 'Invalid token',
    });
  }
};

export { verifyToken };
