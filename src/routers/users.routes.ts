import { Router } from 'express';
import { UsersController } from '../controller/users.controller';
import { verifyToken } from '../middleware/auth';

const userRoutes: Router = Router();

userRoutes.post('', UsersController.createUser);
userRoutes.get('', UsersController.ListUsers);
userRoutes.get('/:id', UsersController.ListOneUser);
userRoutes.put('/:id', verifyToken, UsersController.updatedUser);
userRoutes.delete('/:id', verifyToken, UsersController.deletedUser);

export default userRoutes;
