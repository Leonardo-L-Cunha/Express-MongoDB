import { Router } from 'express';
import { booksController } from '../controller/books.controller';

const booksRoutes: Router = Router();

booksRoutes.post('', booksController.createBook);
booksRoutes.get('', booksController.readBook);
booksRoutes.put('/:id', booksController.updatedBook);
booksRoutes.delete('/:id', booksController.deleteBook);

export default booksRoutes;
