import { create_people_table_command } from "./database/personal-details.db.ts";
import { create_animal_table_command } from "./database/animal.db.ts";
import { factoryAnimals, factoryPeople } from "./factory.ts";
import { argon2Hasher } from "../auth/pwd.ts";
import { encodeBase64 } from "@std/encoding";
import { Database } from "@db/sqlite";


const generateMockAnimalDataForDb = (db: Database) => {
    factoryAnimals.forEach((animal) => {
        const stmt = db.prepare(
            "INSERT INTO pets(id, owner, animal) VALUES (?, ?, ?);",
        );
        stmt.run(
            animal.id,
            animal.owner,
            animal.animal,
        );
    });
};

const generateMockPersonalDataForDb = ( db: Database) => {
    factoryPeople.forEach((person) => {
        const randSalt = crypto.getRandomValues(new Uint8Array(32));
        const salt = encodeBase64(randSalt);
        const hashedPassword = encodeBase64(argon2Hasher(person.password, salt ));
        const stmt = db.prepare(
            "INSERT INTO people(id, firstName, lastName, email, password, salt) VALUES (?, ?, ?, ?, ?, ?)",

        );
        
    })
}