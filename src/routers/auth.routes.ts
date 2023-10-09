import { Router } from 'express';
import { AuthController } from '../controller/auth.controller';

const authRoutes: Router = Router();

authRoutes.post('', AuthController.login);

export default authRoutes;
