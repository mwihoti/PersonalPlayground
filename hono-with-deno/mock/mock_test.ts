import { argon2Verify } from "../auth/pwd.ts";
import { generateMockDataForDb } from "./generateMockDatabase.ts";
import { factoryPeople } from "./factory.ts";
import { assert } from "@std/assert";
import { PersonalDetailWithSalt } from "../types/common.ts";



Deno.test("All password hashes are verified with their respective salt.", () => {
    const personalDetailsDbPath = "./mock/database/people-mock.db";
    const animalMockDbPath = "./mock/database/animal-mock.db";
    const { personalDetailsMockDb } = generateMockDataForDb(
        personalDetailsDbPath, 
        animalMockDbPath,
    );

    factoryPeople.forEach((person) => {
        const stmt = personalDetailsMockDb.prepare(
            `
					SELECT * FROM people WHERE email = '${person.email}';
					`,
        );
        const row = stmt.get<PersonalDetailWithSalt>();
        assert(row !== undefined);

        assert(argon2Verify(person.password, row.password, row.salt));
    });
});