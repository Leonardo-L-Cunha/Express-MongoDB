import { Router } from 'express';
import { UsersController } from '../controller/users.controller';

const userRoutes: Router = Router();

userRoutes.post('', UsersController.createUser);
userRoutes.get('', UsersController.ListUsers);
userRoutes.get('/:id', UsersController.ListOneUser);
userRoutes.put('/:id', UsersController.updatedUser);
userRoutes.delete('/:id', UsersController.deletedUser);

export default userRoutes;
