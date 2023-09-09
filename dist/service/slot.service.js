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
exports.getMySessionService = exports.createSessionService = exports.getAllSessionsService = void 0;
const slot_model_1 = __importDefault(require("../models/slot.model"));
function getAllSessionsService() {
    return __awaiter(this, void 0, void 0, function* () {
        return slot_model_1.default.find({});
    });
}
exports.getAllSessionsService = getAllSessionsService;
function createSessionService(params) {
    return __awaiter(this, void 0, void 0, function* () {
        return slot_model_1.default.create(params);
    });
}
exports.createSessionService = createSessionService;
function getMySessionService(params) {
    return __awaiter(this, void 0, void 0, function* () {
        return slot_model_1.default.find({ userId: params });
    });
}
exports.getMySessionService = getMySessionService;
