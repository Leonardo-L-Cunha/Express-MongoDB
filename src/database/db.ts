import { BookDto } from '../interfaces/book.interface';

import mongoose from 'mongoose';

export const books: BookDto[] = [];

mongoose.connect(
  'mongodb+srv://leonavidareal:cYTy4otLVRMVgQOf@cluster0.bmjsizq.mongodb.net/leo-node'
);

let db = mongoose.connection;

export default db;
