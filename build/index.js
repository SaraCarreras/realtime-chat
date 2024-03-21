"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
const app = (0, express_1.default)();
app.get("/", (_req, res) => {
    res.send("<h1>Realtime ChattersssdddssSSS</h1>");
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
