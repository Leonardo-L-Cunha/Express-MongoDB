import { Router } from 'express';
import { BooksController } from '../controller/books.controller';
import { pagination } from '../middleware/Pagination';

const booksRoutes: Router = Router();

booksRoutes.post('', BooksController.createBook);
booksRoutes.get('', BooksController.readBook, pagination);
booksRoutes.get('/search', BooksController.listBookFilter);
booksRoutes.get('/:id', BooksController.readOneBook);
booksRoutes.put('/:id', BooksController.updatedBook);
booksRoutes.delete('/:id', BooksController.deleteBook);

export default booksRoutes;
