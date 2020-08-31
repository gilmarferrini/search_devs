import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import Users from '../models/Users';

const JWT_SECRET = '4584432/*g4f56d4gf*/dg754+gf8d-g*df8g6544';

class AuthController {
  async login(request: Request, response: Response): Promise<void | Response> {
    const usersRepository = getRepository(Users);
    const { username, password } = request.body;

    const checkIfUserExist = await usersRepository.findOne({
      where: { username },
    });

    if (!checkIfUserExist) {
      return response.status(400).json({ message: 'Usuário inexistente' });
    }

    if (checkIfUserExist) {
      if (checkIfUserExist.password !== password) {
        return response.status(401).json({ message: 'Senha incorreta' });
      }
    }

    jwt.sign(
      {
        id: checkIfUserExist.id,
        username: checkIfUserExist.username,
      },
      JWT_SECRET,
      { expiresIn: '2h' },
      (err, token) => {
        if (err) {
          return response.status(500).json({ error: 'Erro ao gerar o token' });
        }

        return response.status(200).json({ token });
      },
    );
  }
}

export default AuthController;
