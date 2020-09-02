import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
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
    // const {
    //   auth: { id, username },
    // } = request.body;

    const usersRepository = getRepository(Users);
    const users = await usersRepository
      .createQueryBuilder()
      .select(['id', 'avatar_url', 'username', 'description', 'whatsapp'])
      .getRawMany();

    return response.status(200).json(users);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const usersRepository = getRepository(Users);
    const { id } = request.params;

    const {
      auth: { id: userId, username },
    } = request.body;

    if (id !== userId) {
      return response.status(401).send();
    }

    const user = await usersRepository.findOne({
      where: { id: userId, username },
    });

    return response.status(200).json({ user });
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

    const checkIfUsernameExist = await usersRepository.findOne({
      where: { username },
    });

    const checkIfWhatsappExist = await usersRepository.findOne({
      where: { whatsapp },
    });

    if (checkIfUsernameExist) {
      return response
        .status(400)
        .json({ message: 'Este usuário já foi cadastrado' });
    }

    if (checkIfWhatsappExist) {
      return response
        .status(400)
        .json({ message: 'Este whatsapp já foi cadastrado' });
    }

    const hashedPassword = await hash(password, 8);

    const user: IUser = {
      avatar_url,
      username,
      password: hashedPassword,
      description,
      whatsapp,
    };

    await usersRepository.save(user);

    return response.status(200).json(user);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const usersRepository = getRepository(Users);
    const { id } = request.params;
    await usersRepository.delete(id);
    return response.send();
  }
}

export default UsersController;
