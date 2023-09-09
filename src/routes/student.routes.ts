import { Router } from "express";
import { bookaSession, getAllSessionByDeanId } from "../controller/student.controller";
import { verifyToken } from "../middleware/auth";

const studentRoutes = Router();

studentRoutes.get("/getdeanslots",getAllSessionByDeanId);

studentRoutes.post("/bookasession", verifyToken, bookaSession);


export default studentRoutes;