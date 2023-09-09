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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
require('dotenv').config();
const app = (0, express_1.default)();
const connectMongo = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        mongoose_1.default
            .connect(`${process.env.MONGO_DB}`, {
            autoIndex: true,
        })
            .then(() => {
            console.log('Mongo connected');
            resolve('Mongo connected');
        })
            .catch((err) => {
            console.error(err);
            reject(err);
        });
    });
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/v1", index_1.default);
app.listen(process.env.PORT, () => {
    console.log("server is running at port " + process.env.PORT);
    connectMongo();
});
