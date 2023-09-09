import userModel from "../models/user.model";
import { Request,Response } from "express";
import { CreatUserInput, LoginUserInput } from "../schema/user.schema";
const bcrypt =require("bcrypt")
const jwt= require("jsonwebtoken");
import { createUserService } from "../service/auth.service";

export async function registerUser(req:Request<{},{},CreatUserInput>,res:Response) {
    const body = req.body;
    try{
   
        const user = await createUserService(body)
        return res.status(200).json({message:"user register successfully",user})
}catch(e:any){
    res.send(e)
}
}


export async function  loginUser (req:Request<{},{},LoginUserInput>,res:Response){
    try{
    const {email,password} = req.body

    if(!email ||!password){
        return res.send("please send us email and password")
    }
    const user = await userModel.findOne({email:email})

    if(!user){
        return res.status(404).send({message:"user not found"});
    }

    const isPasswordMatched = bcrypt.compareSync(password,user.password);

    if(!isPasswordMatched){
        return res.status(404).send({message:"user email password not found"});
    }


    const payload = {
        id:user._id
    }

    const accessToken = jwt.sign(payload,process.env.SECRET_KEY,{
        expiresIn:86400
    })

    res.status(200).json({message:"login suceess", accessToken})

}catch(e){
    res.send(e);
}
}