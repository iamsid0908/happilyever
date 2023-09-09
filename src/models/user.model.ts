import { NextFunction } from "express";
import mongoose,{Schema} from "mongoose";
const validator=require("validator")
const bcrypt=require("bcrypt")

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role:string
  }

const UserSchema:Schema = new Schema({
    name:{
        type:String,
        require:[true,"Please enter yr name"],
       
    },
    email:{
        type:String,
        require:true,
        unique:true
        },
    password:{
        type:String,
        require:true
        
    },
    role:{
        type:String,
    },
    creatdAt:{
        type:Date,
        default:Date.now
    },
})

UserSchema.pre("save" ,async function (next){
    if(!this.isModified("password")){
        next();
    }
    this.password=await bcrypt.hash(this.password,10);
})

export default mongoose.model<NonNullable<IUser>>('User',UserSchema)