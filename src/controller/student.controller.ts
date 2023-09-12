import { Request,Response } from "express";
import { getMySessionService } from "../service/slot.service";
import {  getSlotById, getUserByUserId } from "../service/student.service";
import SlotModel from "../models/slot.model";
import userModel from "../models/user.model";

export async function getAllSessionByDeanId(req:Request, res:Response) {
    try{
    const userId = req.body.userId;
    const sessions = await getMySessionService(userId)
    const filteredSessions = sessions.filter(sessions => sessions.activation === false);

    res.status(200).json({
        filteredSessions
    })
}catch(e:any){
    res.send(e);
}}

export async function getAllDean(req:Request,res:Response) {
    try{
        const user = await userModel.find({});
        
        const filteredSessions = user.filter(user => user.role !== "student");
        console.log(filteredSessions);
        res.status(200).json({
            filteredSessions
        })
    }catch(e:any){
        res.send(e);
    }
}

export async function bookaSession(req:any,res:Response){
    try{
    const slotId = req.body._id;
    const userId = req.user.id;

    const session = await getSlotById(slotId);
    console.log(session)

    if(session?.booked){
        return res.send("session is already booked")
    }

    const user = await getUserByUserId(userId);
    console.log(user);

    if (session && session.booked !== undefined) {
        session.booked = true; 
        session.bookedwith = user?.name
        session.uniId = user?.uniId
      }

    await session?.save();

    res.status(200).json({
        session
    })

    }catch(e:any){
        res.send(e);
    }


}