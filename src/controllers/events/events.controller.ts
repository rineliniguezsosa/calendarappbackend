import { Request,Response } from 'express';
import { eventModel } from '../../models';
import mongoose from 'mongoose';

export const getEvents = async(req:Request,resp:Response) =>{
    try {
        const events = await eventModel.find().populate('user','name email -_id')
        resp.status(201).json({
            ok:true,
            events
        })
    } catch (error) {
        console.log(error);
        
        resp.status(400).json({
            ok:false,
            msg:'error'
        })
    }
}
export const createEvents = async(req:Request,resp:Response) =>{
    const event = new eventModel(req.body);
    try {

        event.user = new mongoose.Types.ObjectId(req.uid);

        const eventsaved = await event.save();
        
        resp.status(201).json({
            ok:true,
            event:eventsaved
        })
    } catch (error) {
        console.log(error);
        
        resp.status(400).json({
            ok:false,
            msg:'error'
        })
    }
}
export const updateEvents = async(req:Request,resp:Response) =>{
    try {
        resp.status(201).json({
            ok:true,
            msg:''
        })
    } catch (error) {
        console.log(error);
        
        resp.status(400).json({
            ok:false,
            msg:'error'
        })
    }
}
export const deleteEvents = async(req:Request,resp:Response) =>{
    try {
        resp.status(201).json({
            ok:true,
            msg:''
        })
    } catch (error) {
        console.log(error);
        
        resp.status(400).json({
            ok:false,
            msg:'error'
        })
    }
}