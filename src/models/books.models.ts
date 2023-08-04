import mongoose from 'mongoose';
import { BookDto } from '../interfaces/book.interface';

const bookSchema = new mongoose.Schema<BookDto>({
  id: { type: String },
  title: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'authors',
    required: true,
  },
  publisher: { type: String, required: true },
  numberOfPages: { type: Number },
});

const Books = mongoose.model('books', bookSchema);

export default Books;
