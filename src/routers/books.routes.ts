import { Router } from 'express';
import { booksController } from '../controller/books.controller';

const booksRoutes: Router = Router();

booksRoutes.post('', booksController.createBook);
booksRoutes.get('', booksController.readBook);

export default booksRoutes;
