import { Schema,model } from 'mongoose';

const usarioSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

export const usuarioModel = model('usuario',usarioSchema);