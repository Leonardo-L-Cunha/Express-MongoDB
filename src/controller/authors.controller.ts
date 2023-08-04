import { Request, Response } from 'express';
import { authorService } from '../service/authors.service';
import { AuthorDto, AuthorDtoUpdate } from '../interfaces/author.inteface';

class AuthorsController {
  async createAuthor(req: Request, res: Response): Promise<Response> {
    const data: AuthorDto = req.body;

    const newUser = await authorService.createAuthor(data);

    return res.status(201).json(newUser);
  }

  async readAuthor(req: Request, res: Response): Promise<Response> {
    const authors = await authorService.readAuthors();
    return res.send(authors);
  }

  async readOneAuthor(req: Request, res: Response): Promise<Response> {
    const id: string = req.params.id;

    const author: AuthorDto = await authorService.readOneAuthor(id);

    return res.send(author);
  }

  async updatedAuthor(req: Request, res: Response): Promise<Response> {
    const id: string = req.params.id;
    const data: AuthorDtoUpdate = req.body;

    const updatedauthor = await authorService.updatedAuthor(id, data);

    return res.send(updatedauthor);
  }

  async deleteAuthor(req: Request, res: Response): Promise<Response> {
    const id: string = req.params.id;

    await authorService.deleteAuthor(id);

    return res.status(204).send();
  }
}

const authorsController = new AuthorsController();

export { authorsController };
