import { Express,Router } from "express";
import { loginUser, registerUser } from "../controller/auth.controller";
import { validateResourse } from "../middleware/validateResourse";
import { createUserSchema, loginUserSchema } from "../schema/user.schema";
import {  verifyToken } from "../middleware/auth";

const authUser = Router()


authUser.post("/register",validateResourse(createUserSchema),registerUser);
authUser.post("/login",validateResourse(loginUserSchema),loginUser);
authUser.get("/get", verifyToken ,(req,res)=>{res.send("hiiii")})

export default authUser;