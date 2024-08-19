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
const user_1 = __importDefault(require("../models/user"));
function checkNameAndAge(name, age) {
    // Name check
    if (!name)
        return "Name is required";
    if (typeof name !== "string")
        return "Name must be a string";
    if (name.length < 2)
        return "Name must be at least 2 characters";
    if (name.length >= 25)
        return "Name must be less than 25 characters";
    // Age check
    if (!age)
        return "Age is required";
    if (typeof age !== "number" || !Number.isInteger(age)) {
        return "Age must be an integer";
    }
    if (age < 0)
        return "Age must be greater than 0";
    if (age > 120)
        return "Age must be less than 120";
    return null;
}
function getAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield user_1.default.getAll();
            res.status(200).json(users);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    });
}
function add(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, age } = req.body;
            let errorMessage = checkNameAndAge(name, age);
            if (errorMessage) {
                res.status(400).json({ message: errorMessage });
                return;
            }
            const newUser = yield user_1.default.add(name, age);
            res.status(201).json(newUser);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    });
}
exports.default = { getAll, add };
