import { Schema,model } from 'mongoose';

const eventSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    note:{
        type:String,
        required:true
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

eventSchema.method('toJSON', function(){
    const { __v, _id, ...object} = this.toObject();
     return {
        ...object,
        id: _id.toString(),
    };
})

export const eventModel = model('event',eventSchema);