import { Hono } from "@hono/hono";
import { HTTPException } from "@hono/hono/http-exception";
import { factoryAnimals, factoryPeople } from "./mock/factory.ts";

const animals = new Hono().basePath("/animals");
const people = new Hono().basePath("/people");
const app = new Hono().basePath("/api");

animals.get("/", (c) => {
  return c.json(factoryAnimals);
});


animals.get("/:id", (c) => {
  const { id } = c.req.param();
  const animalDetails = factoryAnimals.find((el) => el.id === id);
  if (!animalDetails) {
    throw new HTTPException(404, {
      message: 'ID not found.',
    });
  }
  return c.json(animalDetails);
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
});

app.route("/", people);

if (import.meta.main) {
  Deno.serve({ hostname: "127.0.0.1", port: 5555 }, app.fetch); }