import { Router } from "express";
import { bookaSession, getAllDean, getAllSessionByDeanId } from "../controller/student.controller";
import { verifyToken } from "../middleware/auth";

const studentRoutes = Router();

studentRoutes.get("/getdeanslots",getAllSessionByDeanId);
studentRoutes.get("/getalldean",getAllDean);

studentRoutes.post("/bookasession", verifyToken, bookaSession);


export default studentRoutes;