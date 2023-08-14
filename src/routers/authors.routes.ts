import { Router } from 'express';
import { AuthorsController } from '../controller/authors.controller';

const authorsRoutes: Router = Router();

authorsRoutes.post('', AuthorsController.createAuthor);
authorsRoutes.get('', AuthorsController.readAuthor);
authorsRoutes.get('/:id', AuthorsController.readOneAuthor);
authorsRoutes.put('/:id', AuthorsController.updatedAuthor);
authorsRoutes.delete('/:id', AuthorsController.deleteAuthor);

export default authorsRoutes;
