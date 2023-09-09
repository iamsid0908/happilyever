"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_controller_1 = require("../controller/student.controller");
const auth_1 = require("../middleware/auth");
const studentRoutes = (0, express_1.Router)();
studentRoutes.get("/getdeanslots", student_controller_1.getAllSessionByDeanId);
studentRoutes.post("/bookasession", auth_1.verifyToken, student_controller_1.bookaSession);
exports.default = studentRoutes;
