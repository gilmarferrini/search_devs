import { Router } from 'express';
import UsersController from '../../app/controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', usersController.index);
usersRouter.post('/', usersController.store);

export default usersRouter;
