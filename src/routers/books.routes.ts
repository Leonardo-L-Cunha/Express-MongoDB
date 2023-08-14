import { Router } from 'express';
import { BooksController } from '../controller/books.controller';

const booksRoutes: Router = Router();

booksRoutes.post('', BooksController.createBook);
booksRoutes.get('', BooksController.readBook);
booksRoutes.get('/:id', BooksController.readOneBook);
booksRoutes.put('/:id', BooksController.updatedBook);
booksRoutes.delete('/:id', BooksController.deleteBook);

export default booksRoutes;
