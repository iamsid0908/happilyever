import { Router } from "express"
import authUser from "./auth.routes";
import deanRoutes from "./dean.routes";
import studentRoutes from "./student.routes";
const path = require('path');

 
const globalRoutes = Router();

globalRoutes.get("/healthCheck",(req,res)=>{ res.status(200).send({message:"working"})});
globalRoutes.use("/auth",authUser)
globalRoutes.use("/dean",deanRoutes)
globalRoutes.use("/student", studentRoutes)

export default globalRoutes;
