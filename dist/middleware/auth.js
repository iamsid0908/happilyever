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
exports.verifyToken = void 0;
const jwt = require("jsonwebtoken");
const user_model_1 = __importDefault(require("../models/user.model"));
function verifyToken(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log(req.headers.authorization.split(' ')[0]);
        if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] == 'JWT') {
            jwt.verify(req.headers.authorization.split(' ')[1], process.env.SECRET_KEY, function (err, payload) {
                console.log(payload);
                if (err) {
                    return res.status(403).send({ message: "Access denied, Uuser not authenticated" });
                }
                user_model_1.default.findById(payload.id)
                    .then(data => {
                    req.user = data;
                    next();
                })
                    .catch(err => {
                    req.user = null;
                });
            });
        }
        else {
            res.status(404).send({ message: "JWT not passed" });
        }
    });
}
exports.verifyToken = verifyToken;
