"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentDateTime = void 0;
function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    // Format: "YYYY-MM-DD HH:MM"
    const currentDateTime = `${day}/${month}/${year}`;
    return currentDateTime;
}
exports.getCurrentDateTime = getCurrentDateTime;
