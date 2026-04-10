import { Request, Response } from 'express';

export const createUser = async(req: Request, resp:Response) =>{
    const {name,email,password} = req.body;
    resp.json({
        ok:true,
        msg:'registro',
        name,
        email,
        password
    })
}
export const loginUser = async(req: Request, resp:Response) =>{
    resp.json({
        ok:true,
        msg:'login'
    })
}
export const checkToken = async(req: Request, resp:Response) =>{
    resp.json({
        ok:true,
        msg:'checkToken'
    })
}