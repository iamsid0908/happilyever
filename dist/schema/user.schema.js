"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({
            required_error: "name is required"
        }),
        email: (0, zod_1.string)({
            required_error: "email is required"
        }),
        uniId: (0, zod_1.string)({
            required_error: "University id is required"
        }),
        password: (0, zod_1.string)({
            required_error: "password is required"
        }),
        role: (0, zod_1.string)({
            required_error: "role is also required"
        })
    })
});
exports.loginUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({
            required_error: "email is required"
        }),
        password: (0, zod_1.string)({
            required_error: "password is required"
        })
    })
});
