import { Router } from 'express';
import { BooksController } from '../controller/books.controller';
import { pagination } from '../middleware/pagination';
import { verifyToken } from '../middleware/auth';
import { verifyIfAdmin } from '../middleware/verifyIfAdmin';
const booksRoutes: Router = Router();

booksRoutes.post('', verifyToken, verifyIfAdmin, BooksController.createBook);
booksRoutes.get('', BooksController.readBook, pagination);
booksRoutes.get('/search', BooksController.listBookFilter);
booksRoutes.get('/:id', BooksController.readOneBook);
booksRoutes.put(
  '/:id',
  verifyToken,
  verifyIfAdmin,
  BooksController.updatedBook
);
booksRoutes.delete(
  '/:id',
  verifyToken,
  verifyIfAdmin,
  BooksController.deleteBook
);

export default booksRoutes;
