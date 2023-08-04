import express, { Application } from 'express';
import booksRoutes from './routers/books.routes';
import authorsRoutes from './routers/authors.routes';
import { handleErrors } from './errors/AppError';
import 'express-async-errors';

const app: Application = express();

app.use(express.json());

app.use('/books', booksRoutes);
app.use('/authors', authorsRoutes);

app.use(handleErrors);

export default app;
