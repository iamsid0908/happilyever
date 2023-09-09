import { Response, Request } from "express";
import { createSessionService, getAllSessionsService, getMySessionService } from "../service/slot.service";
import { CreateSlotInput } from "../schema/slot.schema";

export async function getAllSessions(req:Request,res:Response){
    try{
        const sessions = await getAllSessionsService();
        res.status(200).json({
            sessions
        })
    }catch(e:any){
        res.send(e)
    }
}

export async function createSession(req:any,res:Response) {
    try{
        const userId = req.user.id;
        const params = req.body;
        params.userId = userId
        const session = await createSessionService(params);
        res.status(200).json({
            message:"session created",
            session
        })
    }catch(e:any){
        res.send(e);
    }
}

export async function getMySession(req:any,res:Response){
    try{
        const userId = req.user.id;
        const sessions = await getMySessionService(userId);
        const filteredSessions = sessions.filter(sessions => sessions.activation === false);

        res.status(200).json({
            filteredSessions
        })

    }catch(e:any){
        res.send(e);
    }
}

export async function getMyBookedSession(req:any,res:Response) {
    try{
        const userId = req.user.id;
        const sessions = await getMySessionService(userId);
        const filteredSessions = sessions.filter(sessions => sessions.activation === false && 
            sessions.booked === true);

        res.status(200).json({
            filteredSessions
        })
    }catch(e:any){

    }
}