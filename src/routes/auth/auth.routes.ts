import { Router } from 'express';
import { checkToken, createUser, loginUser } from '../../controllers';
import { createUserValidation } from '../../validators';

export const authRoutes = Router();

authRoutes.post('/new',createUserValidation,createUser)
authRoutes.post('/',loginUser)
authRoutes.post('/renew',checkToken)