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
exports.loginUser = exports.registerUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth_service_1 = require("../service/auth.service");
function registerUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        try {
            const user = yield (0, auth_service_1.createUserService)(body);
            return res.status(200).json({ message: "user register successfully", user });
        }
        catch (e) {
            res.send(e);
        }
    });
}
exports.registerUser = registerUser;
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.send("please send us email and password");
            }
            const user = yield user_model_1.default.findOne({ email: email });
            if (!user) {
                return res.status(404).send({ message: "user not found" });
            }
            const isPasswordMatched = bcrypt.compareSync(password, user.password);
            if (!isPasswordMatched) {
                return res.status(404).send({ message: "user email password not found" });
            }
            const payload = {
                id: user._id
            };
            const accessToken = jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn: 86400
            });
            res.status(200).json({ message: "login suceess", accessToken });
        }
        catch (e) {
            res.send(e);
        }
    });
}
exports.loginUser = loginUser;
