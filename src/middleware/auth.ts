import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import 'dotenv/config';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token: string | undefined = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: 'Missing token',
    });
  }

  const [, acessToken] = token.split(' ');

  try {
    verify(acessToken, process.env.SECRET_KEY!);

    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Invalid token',
    });
  }
};

export { verifyToken };
