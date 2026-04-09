import { Router } from 'express';
import { Request, Response } from 'express';

export const authRoutes = Router();

authRoutes.get('/new',(req:Request,resp:Response) =>{
    resp.json({
        ok:true
    })
})
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