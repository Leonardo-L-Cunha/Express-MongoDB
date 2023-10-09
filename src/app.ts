import express, { Application } from 'express';
import booksRoutes from './routers/books.routes';
import authorsRoutes from './routers/authors.routes';
import 'express-async-errors';
import { handleErros } from './middleware/handleErros';
import { notFoundPage } from './middleware/notFoundPage';
import userRoutes from './routers/users.routes';
import authRoutes from './routers/auth.routes';

const app: Application = express();

app.use(express.json());

app.use('/books', booksRoutes);
app.use('/authors', authorsRoutes);
app.use('/users', userRoutes);
app.use('/auth/login', authRoutes);

app.use(notFoundPage);

app.use(handleErros);

export default app;
