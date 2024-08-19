import { Pool } from "pg";
import { join } from "path";
require("dotenv").config({
  override: true,
  path: join(__dirname, "..", ".env")
});

const pool: Pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  port: Number(process.env.DB_PORT)
});

export default pool;
