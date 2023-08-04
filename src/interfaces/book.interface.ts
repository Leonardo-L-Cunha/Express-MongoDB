import mongoose from 'mongoose';

export interface BookDto {
  id?: string;
  title: string;
  author: mongoose.Schema.Types.ObjectId;
  publisher: string;
  numberOfPages: number;
}

export interface BookDtoUpdate {
  title?: string;
  author?: string;
  publisher?: string;
  numberOfPages?: number;
}
