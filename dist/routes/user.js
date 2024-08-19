"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("../controllers/user"));
const router = (0, express_1.Router)();
router.get("/", user_1.default.getAll);
router.post("/", user_1.default.add);
exports.default = router;
