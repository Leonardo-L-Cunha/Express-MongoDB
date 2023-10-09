import { NextFunction, Request, Response } from 'express';
import { Users } from '../models';
import { UserDTO, UserDTOUpdate } from '../interfaces/user.interface';
import { RequestError } from '../errors/RequestError';
import { hashSync } from 'bcryptjs';
import { NotFound } from '../errors/NotFound';

export class UsersController {
  static async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data: UserDTO = req.body;

      const findUser: UserDTO | null = await Users.findOne({
        email: data.email,
      });

      if (findUser) {
        next(new RequestError('User already exists!'));
      }

      const newUser = new Users();

      const hashPassoword = hashSync(data.password, 10);

      Object.assign(newUser, {
        name: data.name,
        email: data.email,
        password: hashPassoword,
        supervisor: data.supervisor || false,
      });

      const user = await Users.create(newUser);

      return res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async ListUsers(req: Request, res: Response, next: NextFunction) {
    const users: UserDTO[] = await Users.find();

    return res.send(users);
  }

  static async ListOneUser(req: Request, res: Response, next: NextFunction) {
    try {
      const id: string = req.params.id;

      const user: UserDTO | null = await Users.findById(id);

      if (!user) {
        next(new NotFound('User not found!'));
      }

      return res.send(user);
    } catch (error) {
      next(error);
    }
  }

  static async updatedUser(req: Request, res: Response, next: NextFunction) {
    try {
      const id: string = req.params.id;

      const data: UserDTOUpdate = req.body;

      if (data.password) {
        hashSync(data.password, 10);
      }

      const updatedUser: UserDTO | null = await Users.findByIdAndUpdate(
        id,
        { $set: data },
        { new: true }
      );

      if (!updatedUser) {
        next(new NotFound('User not found!'));
      }
      return res.send(updatedUser);
    } catch (error) {
      next(error);
    }
  }

  static async deletedUser(req: Request, res: Response, next: NextFunction) {
    try {
      const id: string = req.params.id;

      const updatedUser = await Users.findByIdAndDelete(id);

      if (!updatedUser) {
        next(new NotFound('User not found!'));
      }
      return res.status(204);
    } catch (error) {
      next(error);
    }
  }
}
