import express, { Application } from 'express';
import booksRoutes from './routers/books.routes';
import authorsRoutes from './routers/authors.routes';
import 'express-async-errors';
import { handleErros } from './middleware/handleErros';

const app: Application = express();

app.use(express.json());

app.use('/books', booksRoutes);
app.use('/authors', authorsRoutes);

app.use(handleErros);

export default app;
