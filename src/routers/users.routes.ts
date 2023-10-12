import { Router } from 'express';
import { UsersController } from '../controller/users.controller';
import { verifyToken } from '../middleware/auth';
import { verifyIfAdmin } from '../middleware/verifyIfAdmin';

const userRoutes: Router = Router();

userRoutes.post('', UsersController.createUser);
userRoutes.get('', UsersController.ListUsers);
userRoutes.get('/:id', UsersController.ListOneUser);
userRoutes.put('/:id', verifyToken, verifyIfAdmin, UsersController.updatedUser);
userRoutes.delete(
  '/:id',
  verifyToken,
  verifyIfAdmin,
  UsersController.deletedUser
);

export default userRoutes;
