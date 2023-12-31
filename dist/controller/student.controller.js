"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookaSession = exports.getAllDean = exports.getAllSessionByDeanId = void 0;
const slot_service_1 = require("../service/slot.service");
const student_service_1 = require("../service/student.service");
const user_model_1 = __importDefault(require("../models/user.model"));
function getAllSessionByDeanId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = req.body.userId;
            const sessions = yield (0, slot_service_1.getMySessionService)(userId);
            const filteredSessions = sessions.filter(sessions => sessions.activation === false);
            res.status(200).json({
                filteredSessions
            });
        }
        catch (e) {
            res.send(e);
        }
    });
}
exports.getAllSessionByDeanId = getAllSessionByDeanId;
function getAllDean(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_model_1.default.find({});
            const filteredSessions = user.filter(user => user.role !== "student");
            console.log(filteredSessions);
            res.status(200).json({
                filteredSessions
            });
        }
        catch (e) {
            res.send(e);
        }
    });
}
exports.getAllDean = getAllDean;
function bookaSession(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const slotId = req.body._id;
            const userId = req.user.id;
            const session = yield (0, student_service_1.getSlotById)(slotId);
            console.log(session);
            if (session === null || session === void 0 ? void 0 : session.booked) {
                return res.send("session is already booked");
            }
            const user = yield (0, student_service_1.getUserByUserId)(userId);
            console.log(user);
            if (session && session.booked !== undefined) {
                session.booked = true;
                session.bookedwith = user === null || user === void 0 ? void 0 : user.name;
                session.uniId = user === null || user === void 0 ? void 0 : user.uniId;
            }
            yield (session === null || session === void 0 ? void 0 : session.save());
            res.status(200).json({
                session
            });
        }
        catch (e) {
            res.send(e);
        }
    });
}
exports.bookaSession = bookaSession;
