"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSlotSchema = void 0;
const zod_1 = require("zod");
exports.createSlotSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        day: (0, zod_1.string)({
            required_error: "day is required"
        }),
        time: (0, zod_1.string)({
            required_error: "time is also required"
        })
    })
});
