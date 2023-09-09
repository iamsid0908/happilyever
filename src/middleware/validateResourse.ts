import { NextFunction, query } from "express";
import { AnyZodObject } from "zod";
import { Request,Response } from "express";


export const validateResourse = (schema: AnyZodObject)=>(req:Request,res:Response,next:NextFunction)=> {
    try{
        schema.parse({
        body: req.body,
        query: req.query,
        params: req.params
        });
        next(); 
    }catch(e){
        res.status(400).send(e)
    }
}