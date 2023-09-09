import { NextFunction, Request, Response } from "express";
const jwt= require("jsonwebtoken")
import userModel from "../models/user.model";


export async function verifyToken(req:any,res:Response,next:NextFunction) {
    // console.log(req.headers.authorization.split(' ')[0]);
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0]=='JWT'){
        jwt.verify(req.headers.authorization.split(' ')[1],process.env.SECRET_KEY,function (err:any,payload:any){

            console.log(payload);
            if(err){
                return res.status(403).send({message:"Access denied, Uuser not authenticated"});
            }
            userModel.findById(payload.id)
            .then(data => { 
                req.user = data;
                next();
            })
            .catch(err=>{
                req.user = null;
            })
        })
    }else{
        res.status(404).send({message:"JWT not passed"});
    }
}