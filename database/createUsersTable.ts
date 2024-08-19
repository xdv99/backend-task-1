import pool from "./database";

(async () => {
  await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(25) NOT NULL,
            age INTEGER NOT NULL
        );
    `);
})();
