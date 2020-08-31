import { Request, Response } from 'express';
import { getRepository } from "typeorm";
import Users from '../models/Users';

interface IUser {
  avatar_url: string;
  username: string;
  password: string;
  description: string;
  whatsapp: string;
}

class UsersController {
  async index(request: Request, response: Response): Promise<Response> {
    const usersRepository = getRepository(Users);
    const users = await usersRepository.createQueryBuilder().select(['avatar_url', 'username', 'description', 'password'])
    return response.status(200).json(users);
  }

  async store(request: Request, response: Response): Promise<Response> {
    const usersRepository = getRepository(Users);
    const {
      avatar_url,
      username,
      password,
      description,
      whatsapp,
    } = request.body;

    const checkIfUserExist = await usersRepository.findOne({
      where: { username }
    });

    if (checkIfUserExist) {
      if (checkIfUserExist.username === username) {
        return response.status(400).json({ message: 'Username existente' });
      } else if (checkIfUserExist.whatsapp === whatsapp) {
        return response.status(400).json({ message: 'Whatsapp existente'});
      }
    }

    const user: IUser = {
      avatar_url,
      username,
      password,
      description,
      whatsapp,
    };

    await usersRepository.save(user);

    return response.status(200).json(user);
  }
}

export default UsersController;
