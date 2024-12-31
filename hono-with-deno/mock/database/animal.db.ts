import { Database } from "@db/sqlite";
const animalDb = new Database("./mock/database/pets.db");

export  const create_animal_table_command = `
         CREATE TABLE IF NOT EXISTS animals (
         id TEXT PRIMARY KEY,
         owner TEXT NOT NULL,
         animal TEXT NOT NULL)
         `