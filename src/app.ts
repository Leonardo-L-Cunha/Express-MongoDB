import express, { Application } from 'express';
import booksRoutes from './routers/books.routes';
import db from './database/db';

db.on('error', console.log.bind(console, 'Erro de connection'));
db.once('open', () => {
  console.log('Database is connection!');
});

const app: Application = express();

app.use(express.json());

app.use('/books', booksRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
