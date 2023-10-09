import { Router } from 'express';
import { BooksController } from '../controller/books.controller';
import { pagination } from '../middleware/pagination';
import { verifyToken } from '../middleware/auth';
const booksRoutes: Router = Router();

booksRoutes.post('', verifyToken, BooksController.createBook);
booksRoutes.get('', verifyToken, BooksController.readBook, pagination);
booksRoutes.get('/search', BooksController.listBookFilter);
booksRoutes.get('/:id', BooksController.readOneBook);
booksRoutes.put('/:id', BooksController.updatedBook);
booksRoutes.delete('/:id', BooksController.deleteBook);

export default booksRoutes;
