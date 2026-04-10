import { Router } from 'express';
import { checkToken, createUser, loginUser } from '../../controllers';
import { createUserValidation,loginValidation } from '../../validators';

export const authRoutes = Router();

authRoutes.post('/new',createUserValidation,createUser)
authRoutes.post('/',loginValidation,loginUser)
authRoutes.post('/renew',checkToken)