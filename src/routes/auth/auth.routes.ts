import { Router } from 'express';
import { Request, Response } from 'express';
import { checkToken, createUser, loginUser } from '../../controllers';

export const authRoutes = Router();

authRoutes.get('/new',createUser)
authRoutes.post('/',loginUser)
authRoutes.post('/renew',checkToken)