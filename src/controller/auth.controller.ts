import { NextFunction, Request, Response } from 'express';
import { UserDTO } from '../interfaces/user.interface';
import { Users } from '../models';

export class AuthController {
  static async login(req: Request, res: Response, next: NextFunction) {
    const user: UserDTO = req.body;

    const findUser = Users.findOne({ email: user.email });
  }
}
