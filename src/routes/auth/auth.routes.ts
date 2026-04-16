import { Router } from 'express';
import { checkToken, createUser, loginUser } from '../../controllers';
import { createUserValidation,loginValidation } from '../../validators';
import { validarJwt } from '../../middleware';

export const authRoutes = Router();

authRoutes.post('/new',createUserValidation,createUser)
authRoutes.post('/',loginValidation,loginUser)
authRoutes.post('/renew',validarJwt,checkToken)