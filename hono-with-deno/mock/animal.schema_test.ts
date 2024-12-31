import { assert } from "@std/assert";
import AnimalSchema from "./animal.schema.ts";
import { factoryAnimals } from "./factory.ts";
import { id_ID } from "npm:@faker-js/faker@8.4.1";

// Actually, this is an optional test since Zod follows a functional programming concept "Parse, don't validate."
// See https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/

Deno.test("Animal or pet details matches Zod object schema `AnimalSchema`.", () => {

    factoryAnimals.forEach((animal) => {
        assert(
            AnimalSchema.safeParse({
                id: animal.id,
                animal: animal.animal,
                owner: animal.owner,
            }).success,
        )
    })
});