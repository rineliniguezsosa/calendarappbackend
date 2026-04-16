import { Request, Response } from 'express';
import { usuarioModel } from '../../models';
import bcrypt from 'bcryptjs';
import { generateJwt } from '../../helpers';

declare global {
    namespace Express {
        interface Request {
            uid?: string;
            name?: string;
        }
    }
}

export const createUser = async(req: Request, resp:Response) =>{
    const {password} = req.body;
    try {
        
        const usuario = new usuarioModel(req.body);

        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password,salt)
    
        await usuario.save();

        //generar JWT
        const token = await generateJwt(usuario.id,usuario.name);
    
        resp.status(201).json({
            ok:true,
            uid:usuario.id,
            name:usuario.name,
            token
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

        const token = await generateJwt(usuario.id,usuario.name);

        resp.json({
            ok:true,
            uid:usuario.id,
            name:usuario.name,
            token
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
    const { uid,name } = req;

    //generar Jwt
    const token = await generateJwt(uid as string,name as string);
    resp.json({
        ok:true,
        token
    })
}