import { QueryResult } from "pg";
import pool from "../database/database";

export interface User {
  id: number;
  name: string;
  age: number;
}

async function getAll(): Promise<User[]> {
  const result: QueryResult = await pool.query("SELECT * FROM users");
  return result.rows;
}

async function add(name: string, age: number): Promise<User> {
  const result: QueryResult = await pool.query(
    "INSERT INTO users (name, age) VALUES ($1, $2) RETURNING *",
    [name, age]
  );
  return result.rows[0];
}

export default { getAll, add };
