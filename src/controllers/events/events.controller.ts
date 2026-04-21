import { Request,Response } from 'express';
import { eventModel } from '../../models';
import mongoose from 'mongoose';

export const getEvents = async(req:Request,resp:Response) =>{
    try {
        const events = await eventModel.find().populate('user','name email -_id')
        resp.status(200).json({
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
    const eventoId = req.params.id;
    const uid = req.uid;
    try {
        const event = await eventModel.findById(eventoId);

        if(!event){
            return resp.status(400).json({
                ok:false,
                msg:'Evento no existe por ese id'
            })
        }

        if (event.user?.toString() !== uid) {
            return resp.status(401).json({
                ok:false,
                msg:'No tiene privilegio de editar este evento'
            })
        }

        const newEvent = {
            ...req.body,
            user:uid
        }

        const eventUpdated = await eventModel.findByIdAndUpdate(eventoId,newEvent,{ new:true });

        resp.json({
            ok:true,
            event:eventUpdated
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
    const eventoId = req.params.id;
    const uid = req.uid;
    try {
         const event = await eventModel.findById(eventoId);

        if(!event){
            return resp.status(400).json({
                ok:false,
                msg:'Evento no existe por ese id'
            })
        }

        if (event.user?.toString() !== uid) {
            return resp.status(401).json({
                ok:false,
                msg:'No tiene privilegio de eliminar este evento'
            })
        }

        const newEvent = {
            ...req.body,
            user:uid
        }

        const eventEliminated = await eventModel.findByIdAndDelete(eventoId);
        resp.json({
            ok:true,
            event: eventEliminated
        })
    } catch (error) {
        console.log(error);
        
        resp.status(400).json({
            ok:false,
            msg:'error'
        })
    }
}