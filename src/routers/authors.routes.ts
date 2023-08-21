import { Router } from 'express';
import { AuthorsController } from '../controller/authors.controller';
import { pagination } from '../middleware/pagination';

const authorsRoutes: Router = Router();

authorsRoutes.post('', AuthorsController.createAuthor);
authorsRoutes.get('', AuthorsController.readAuthor, pagination);
authorsRoutes.get('/:id', AuthorsController.readOneAuthor);
authorsRoutes.put('/:id', AuthorsController.updatedAuthor);
authorsRoutes.delete('/:id', AuthorsController.deleteAuthor);

export default authorsRoutes;
