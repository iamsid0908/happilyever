"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("./auth.routes"));
const dean_routes_1 = __importDefault(require("./dean.routes"));
const student_routes_1 = __importDefault(require("./student.routes"));
const path = require('path');
const globalRoutes = (0, express_1.Router)();
globalRoutes.get("/healthCheck", (req, res) => { res.status(200).send({ message: "working" }); });
globalRoutes.use("/auth", auth_routes_1.default);
globalRoutes.use("/dean", dean_routes_1.default);
globalRoutes.use("/student", student_routes_1.default);
exports.default = globalRoutes;
