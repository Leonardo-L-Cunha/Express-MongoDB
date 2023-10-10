import { NextFunction, Request, Response } from 'express';

const verifyIfAdmin = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user;

  if (!user.supervisor) {
    return res.status(401).json({ message: 'You dont have permission' });
  }

  return next();
};

export { verifyIfAdmin };
