import jwt  from 'jsonwebtoken';
import { Request,Response,NextFunction } from 'express'

declare global {
    namespace Express {
        interface Request {
            id?: string;
            name?: string;
        }
    }
}

export const validarJwt = (req: Request,resp : Response,next:NextFunction) =>{
    const token = req.headers['x-token']
    if (!token) {
        return resp.status(401).json({
            ok:false,
            msg:'No hay token en la petición'
        })
    }
    try {
        const { uid, name } = jwt.verify(token as string,process.env.SECRET_JWT as string) as { uid: string; name: string }

        req.id = uid;
        req.name = name;

    } catch (error) {
         return resp.status(401).json({
                ok:false,
                msg:'Token no valido'
            })
    }
    
    next()
}