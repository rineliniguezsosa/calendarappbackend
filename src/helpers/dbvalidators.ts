import { usuarioModel } from "../models";

export const userEmailExist = async(email:string = '') =>{
    const usuario = await usuarioModel.findOne({email})

    if (usuario) {
        throw new Error('Un usuario existe con este correo')
    }
}