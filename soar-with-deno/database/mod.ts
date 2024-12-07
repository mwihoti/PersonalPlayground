import { Database } from "@db/sqlite";

const db = new Database("./database/users.db");

const create_table_command = `
        CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        salt TEXT NOT NULL
        )
    `;
if (db.open) {
    db.exec(create_table_command);
} else {
    console.error("DB is not connected");
    Deno.exit(1);
}

export default db;