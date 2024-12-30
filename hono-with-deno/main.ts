import { Hono } from "@hono/hono";
import { HTTPException } from "@hono/hono/http-exception";
import AnimalFactory from "./mock/factory.ts";

const factoryAnimals = AnimalFactory.createMany(10);

console.log(factoryAnimals);


const app = new Hono().basePath("/api");

app.get("/animals", (c) => {
  return c.json(factoryAnimals);
});


app.get("/animals/:id", (c) => {
  const { id } = c.req.param();
  const animalDetails = factoryAnimals.find((el) => el.id === id);
  if (!animalDetails) {
    throw new HTTPException(404, {
      message: 'Id not found.',
    });
  }
  return c.json(animalDetails);
})

if (import.meta.main) {
  Deno.serve({ hostname: "127.0.0.1", port: 5555 }, app.fetch); }