import { assert } from "@std/assert";
import PersonalDetailSchema from "./personal-details.schema.ts";
import { factoryPeople } from "./factory.ts";

// Actually, this is an optional test since Zod follows a functional programming concept "Parse, don't validate."
// See https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/

Deno.test("Personal details matches Zod object schema `PersonalDetailSchema`", () => {
    factoryPeople.forEach((person) => {
        assert(
            PersonalDetailSchema.safeParse({
                id: person.id,
                firstName: person.firstName,
                lastName: person.lastName,
                email: person.email,
                password: person.password,
                
            }).success,
        )
    })
});