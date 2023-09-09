"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateResourse = void 0;
const validateResourse = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        });
        next();
    }
    catch (e) {
        res.status(400).send(e);
    }
};
exports.validateResourse = validateResourse;
