import express, { Application } from 'express';
import booksRoutes from './routers/books.routes';
const app: Application = express();

app.use(express.json());

app.use('/books', booksRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
