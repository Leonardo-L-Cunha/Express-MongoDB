import { Router } from 'express';
import { authorsController } from '../controller/authors.controller';
import validatedErro from '../middleware/validatedError';

const authorsRoutes: Router = Router();

authorsRoutes.post('', authorsController.createAuthor);
authorsRoutes.get('', authorsController.readAuthor);
authorsRoutes.get('/:id', validatedErro, authorsController.readOneAuthor);
authorsRoutes.put('/:id', authorsController.updatedAuthor);
authorsRoutes.delete('/:id', authorsController.deleteAuthor);

export default authorsRoutes;
