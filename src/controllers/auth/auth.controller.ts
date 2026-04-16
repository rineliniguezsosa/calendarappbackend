import { Request, Response } from 'express';
import { usuarioModel } from '../../models';
import bcrypt from 'bcryptjs';

export const createUser = async(req: Request, resp:Response) =>{
    const {password} = req.body;
    try {
        
        const usuario = new usuarioModel(req.body);

        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password,salt)
    
        await usuario.save();
    
        resp.status(201).json({
            ok:true,
            uid:usuario.id,
            name:usuario.name
        })
    } catch (error) {
        console.log('error in createUser: ',error);
        resp.status(500).json({
            ok:true,
            msg:'Porfavor hable con el administrador',
        })
        
    }
    
}
export const loginUser = async(req: Request, resp:Response) =>{
    const {email,password} = req.body;
    try {
        const usuario = await usuarioModel.findOne({email})

        if (!usuario) {
            resp.status(400).json({
                ok:false,
                msg:'El usuario no existe con el email',
            })
            return;
        }
        const validpassword = bcrypt.compareSync(password,usuario.password);

        if (!validpassword) {
            resp.status(400).json({
                ok:false,
                msg:'El password es incorrecto!!',
            })
        }
        resp.json({
            ok:true,
            uid:usuario.id,
            name:usuario.name
        })
    } catch (error) {
        console.log('error in createUser: ',error);
        resp.status(500).json({
            ok:true,
            msg:'Porfavor hable con el administrador',
        })
        
    }
}
export const checkToken = async(req: Request, resp:Response) =>{
    resp.json({
        ok:true,
        msg:'checkToken'
    })
}