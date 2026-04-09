import { Router } from 'express';
import { Request, Response } from 'express';

export const authRoutes = Router();

authRoutes.get('/',(req:Request,resp:Response) =>{
    resp.json({
        ok:true
    })
})