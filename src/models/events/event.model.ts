import { Schema,model } from 'mongoose';

const eventSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    note:{
        type:String,
    },
    start:{
        type:Date,
        required:true
    },
    end:{
        type:Date,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'usuario'
    }
})

export const eventModel = model('event',eventSchema);