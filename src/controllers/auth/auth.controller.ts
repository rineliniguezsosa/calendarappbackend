import { Request, Response } from 'express';
import { usuarioModel } from '../../models';

export const createUser = async(req: Request, resp:Response) =>{
    // const {name,email,password} = req.body;
    const usuario = new usuarioModel(req.body);

    await usuario.save();

    resp.status(201).json({
        ok:true,
        msg:'registro',
    })
}
export const loginUser = async(req: Request, resp:Response) =>{
    const {email,password} = req.body;
    resp.json({
        ok:true,
        msg:'login',
        email,
        password
    })
}
export const checkToken = async(req: Request, resp:Response) =>{
    resp.json({
        ok:true,
        msg:'checkToken'
    })
}