import { Hono } from "@hono/hono";
import { HTTPException } from "@hono/hono/http-exception";
import { factoryPeople } from "./mock/factory.ts";
import { animalDb, personalDetailsDb } from "./mock/database/mod.ts";
import { create_animal_table_command } from "./mock/database/animal.db.ts";
import { create_people_table_command } from "./mock/database/personal-details.db.ts";
import { Animal } from "./types/inferred.ts";
import checkAuth from "./auth/checkAuth.ts";
import registerUser from "./middleware/register.ts";
import loginUser from "./middleware/login.ts";
import { PersonalDetailWithSalt } from "./types/common.ts";


if (animalDb.open) {
  animalDb.exec(create_animal_table_command);
}
if (personalDetailsDb.open) {
  personalDetailsDb.exec(create_people_table_command);
}

const admin = new Hono().basePath("/auth/admin");
const animals = new Hono().basePath("/api/animals");
const people = new Hono().basePath("/api/people");
const app = new Hono();

admin.post("/register", registerUser);
admin.post("/login", loginUser);
app.route("/", admin);


animals.use(checkAuth);
people.use(checkAuth);


animals.get("/", (c) => {
  const stmt = animalDb.prepare("SELECT * FROM pets");
  const rows = stmt.all<Animal>();


  return c.json(rows);
}).put(async (c) => {
  const randUUID = crypto.randomUUID();
  const userInput = await c.req.json<{animal: string; owner: string}>();
  const animal: Animal = {
    animal: userInput.animal,
    owner: userInput.owner,
    id: randUUID,
  };
  const stmt = animalDb.prepare(
    "INSERT INTO pets (id, owner, animal) VALUES (?, ?, ?);"
  );

  const changes = stmt.run(
    animal.id,
    animal.owner,
    animal.animal,
  );
  if (changes >  0) {
    return c.json(animal);
  } else {
    throw new HTTPException(500, {
      message: "Failed to write animal data to database.",
    })
  }
});


animals.get("/:id", (c) => {
  const { id } = c.req.param();
const stmt = animalDb.prepare("SELECT * FROM pets WHERE id = ?;");
const row = stmt.get<Animal>(id);

  if (!row) {
    throw new HTTPException(404, {
      message: 'ID not found.',
    });
  }
  return c.json(row);
}).put(async (c) => {
  const { id } = c.req.param();
  const userInput = await c.req.json<{
    owner: string;
  }>();
  const stmt = animalDb.prepare("SLECT * FROM pets WHERE id  = ?;");
  const row = stmt.get<Animal>(id);
  if(!row) {
    throw new HTTPException(404, {
      message: "ID not found.",
    });
  }

  const stmt2 = animalDb.prepare("UPDATE pets SET onwer = ? WHERE id = ?;");
  const changes = stmt2.run(userInput.owner, id);
  if (changes > 0) {
    const stmt3 = animalDb.prepare("SELECT * FROM pets WHERE id = ?; ");
    const newRow = stmt3.get<Animal>(id);
    if (!newRow) {
      throw new HTTPException(404, {
        message: "ID not found.",
      });
    }
    return c.json(newRow);
  } else {
    throw new HTTPException( 500, {
      message: "Failed to write animal data to database."
    });
  }
});
app.route("/", animals);

people.get('/' , (c) => {
  return c.json(factoryPeople);
});

people.get("/:id", (c) => {
  const { id } = c.req.param();
  const personalDetail = factoryPeople.find((el) =>
    el.id === Number.parseInt(id)
  );
  if (!personalDetail) {
    throw new HTTPException(404, {
      message: "ID not found.",
    });
  }
  return c.json(personalDetail);
}).delete((c) => {
  const { id } = c.req.param();
  const stmt = personalDetailsDb.prepare("SELECT * FROM people WHERE id = ?;");
  const row =  stmt.get<PersonalDetailWithSalt>(id);
  if (!row)  {
    throw new HTTPException(404, {message: "User not found."});
  }
  const deleteOperation = personalDetailsDb.prepare("DELETE FROM people WHERE id = ?;");

  const changes = deleteOperation.run(id);
  if (changes > 0) {
    return c.text(
      `User with email "${row.email}" has been deleted in the database.`,
    );
  }
  throw new HTTPException(503,  {
    message: "Server error, unable to delete user in the database.",
  });
});

app.route("/", people);

if (import.meta.main) {
  Deno.serve({ hostname: "127.0.0.1", port: 5555 }, app.fetch); }