import {Router} from 'express';
import * as userController from '../controllers/user.controller';

import {verifyToken} from '../middlewares/authJwt';
import {getTokenContent} from '../utils/jwt';

const router = Router();

/**
 * !The routes are already prefixed with /user
 * !Do not create the functions here, create them in the controller file
 */
router.get('/', verifyToken, userController.getUsers);

router.get('/get', verifyToken, userController.getUser);

router.put('/', verifyToken, userController.updateUser);

router.delete('/', verifyToken, userController.deleteUser);

export default router;