import { Router } from 'express';
import { Request, Response } from 'express';
import { createUser } from '../../controllers';

export const authRoutes = Router();

authRoutes.get('/new',createUser)
authRoutes.post('/',(req:Request,resp:Response) =>{
    resp.json({
        ok:true
    })
})
authRoutes.post('/renew',(req:Request,resp:Response) =>{
    resp.json({
        ok:true
    })
})