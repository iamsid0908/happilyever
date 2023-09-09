import { Router } from "express";
import { createSession, getAllSessions, getMyBookedSession, getMySession } from "../controller/slot.controller";
import { validateResourse } from "../middleware/validateResourse";
import { createSlotSchema } from "../schema/slot.schema";
import { verifyToken } from "../middleware/auth";

const deanRoutes = Router();

deanRoutes.get("/getallsessions", getAllSessions)
deanRoutes.post("/createsession", validateResourse(createSlotSchema),verifyToken,createSession);
deanRoutes.post("/getmysessions", verifyToken,getMySession);
deanRoutes.post("/getmybookedsessions", verifyToken,getMyBookedSession);



export default deanRoutes