import { NextFunction, Request, Response } from 'express';
import { UserDTO } from '../interfaces/user.interface';
import { Users } from '../models';
import { RequestError } from '../errors/RequestError';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import 'dotenv/config';
export class AuthController {
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const user: UserDTO = req.body;

      const findUser = await Users.findOne({ email: user.email });

      if (!findUser) {
        throw new RequestError();
      }
      const passwordMath = await compare(user.password, findUser.password);

      if (!passwordMath) {
        throw new RequestError();
      }

      const token: string = sign(
        {
          id: findUser._id.toString(),
        },
        process.env.SECRET_KEY!,
        {
          expiresIn: 86400,
        }
      );

      return res.status(200).json({
        token: token,
      });
    } catch (error) {
      next(error);
    }
  }
}
