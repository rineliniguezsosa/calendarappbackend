import { Request, Response } from 'express';

export const createUser = async(req: Request, resp:Response) =>{
    resp.json({
        ok:true,
        msg:'registro'
    })
}