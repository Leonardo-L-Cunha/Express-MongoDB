import { AppError } from '../errors/AppError';
import { AuthorDto, AuthorDtoUpdate } from '../interfaces/author.inteface';
import { BookDto, BookDtoUpdate } from '../interfaces/book.interface';
import Authors from '../models/author.models';

class AuthorsService {
  private authors = Authors;

  async createAuthor(data: AuthorDto): Promise<AuthorDto> {
    const newauthor: AuthorDto = new Authors();

    Object.assign(newauthor, data);

    const author = await this.authors.create(newauthor);

    return author;
  }

  async readAuthors(): Promise<AuthorDto[]> {
    const authors = this.authors.find();

    return authors;
  }

  async readOneAuthor(id: string): Promise<AuthorDto> {
    const findauthor = await this.authors.findById(id);

    if (!findauthor) {
      throw new AppError('Author not found!', 404);
    }

    return findauthor;
  }

  async updatedAuthor(id: string, data: AuthorDtoUpdate): Promise<AuthorDto> {
    const updatedauthor = await this.authors.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );

    return updatedauthor!;
  }

  async deleteAuthor(id: string): Promise<void> {
    const findauthor = await this.authors.findByIdAndDelete(id);
  }
}

const authorService = new AuthorsService();

export { authorService };
