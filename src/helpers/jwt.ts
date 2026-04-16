import jwt from 'jsonwebtoken';


export const generateJwt = async(uid:string,name:string) =>{
    return new Promise((resolve, reject) => {
        const payload = { uid, name };

        jwt.sign(payload,process.env.SECRET_JWT as string,{expiresIn:'2h'},(error,token)=>{
            if (error) {
                console.log(error);
                reject('No se pudo generar el token')
            }

            resolve(token)
        })
    })
}