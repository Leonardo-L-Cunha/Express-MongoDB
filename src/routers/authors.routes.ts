import { Router } from 'express';
import { AuthorsController } from '../controller/authors.controller';
import { pagination } from '../middleware/pagination';
import { verifyToken } from '../middleware/auth';
import { verifyIfAdmin } from '../middleware/verifyIfAdmin';

const authorsRoutes: Router = Router();

authorsRoutes.post(
  '',
  verifyToken,
  verifyIfAdmin,
  AuthorsController.createAuthor
);
authorsRoutes.get('', AuthorsController.readAuthor, pagination);
authorsRoutes.get('/:id', AuthorsController.readOneAuthor);
authorsRoutes.put(
  '/:id',
  verifyToken,
  verifyIfAdmin,
  AuthorsController.updatedAuthor
);
authorsRoutes.delete(
  '/:id',
  verifyToken,
  verifyIfAdmin,
  AuthorsController.deleteAuthor
);

export default authorsRoutes;
