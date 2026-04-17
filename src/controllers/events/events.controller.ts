import { Request,Response } from 'express';

export const getEvents = async(req:Request,resp:Response) =>{
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
export const createEvents = async(req:Request,resp:Response) =>{
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