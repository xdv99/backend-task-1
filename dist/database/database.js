"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const path_1 = require("path");
require("dotenv").config({
    override: true,
    path: (0, path_1.join)(__dirname, "..", ".env")
});
const pool = new pg_1.Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    port: Number(process.env.DB_PORT)
});
exports.default = pool;
