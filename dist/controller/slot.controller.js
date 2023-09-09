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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyBookedSession = exports.getMySession = exports.createSession = exports.getAllSessions = void 0;
const slot_service_1 = require("../service/slot.service");
function getAllSessions(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sessions = yield (0, slot_service_1.getAllSessionsService)();
            res.status(200).json({
                sessions
            });
        }
        catch (e) {
            res.send(e);
        }
    });
}
exports.getAllSessions = getAllSessions;
function createSession(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = req.user.id;
            const params = req.body;
            params.userId = userId;
            const session = yield (0, slot_service_1.createSessionService)(params);
            res.status(200).json({
                message: "session created",
                session
            });
        }
        catch (e) {
            res.send(e);
        }
    });
}
exports.createSession = createSession;
function getMySession(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = req.user.id;
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
exports.getMySession = getMySession;
function getMyBookedSession(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = req.user.id;
            const sessions = yield (0, slot_service_1.getMySessionService)(userId);
            const filteredSessions = sessions.filter(sessions => sessions.activation === false &&
                sessions.booked === true);
            res.status(200).json({
                filteredSessions
            });
        }
        catch (e) {
        }
    });
}
exports.getMyBookedSession = getMyBookedSession;
