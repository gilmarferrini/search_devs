import { Router } from 'express';
import UsersController from '../../app/controllers/UsersController';
import AuthController from '../../app/controllers/AuthController';

const usersRouter = Router();

const usersController = new UsersController();
const authController = new AuthController();

usersRouter.get('/', usersController.index);
usersRouter.post('/', usersController.store);

usersRouter.post('/login', authController.login);

export default usersRouter;
