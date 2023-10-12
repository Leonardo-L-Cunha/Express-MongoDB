import { NextFunction, Request, Response } from 'express';
import { Users } from '../models';

const verifyIfAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;
  const id: string = req.params.id;

  const findUser = await Users.findById(user.id);

  if (id === findUser?._id.toString()) {
    return next();
  }

  if (!findUser?.supervisor) {
    return res.status(401).json({ message: 'You dont have permission' });
  }

  return next();
};

export { verifyIfAdmin };
