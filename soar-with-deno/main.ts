import { Application, Router } from '@oak/oak';
import { LoginData, RegisterData } from "./types/request.ts";

const router = new Router();
const app = new Application();
const controller = new AbortController();


router.get("/hello", (ctx) => {
  ctx.response.body = "Hello, World!";
});

router.get("/close", (ctx) => {
  ctx.response.body = "Bye!";
  controller.abort("User has invoked to cloese the connection")
});

router.post("/register", async (ctx) => {
  const registerData: RegisterData | undefined = await ctx.request.body.json();
  if (registerData) {
    console.log(
      `Username is "${registerData.username}" and password is "${registerData.password}"`,
    );
  }
});

router.post("/login", async (ctx) => {
  const loginData: LoginData | undefined = await ctx.request.body.json();
  if (loginData) {
    console.log(
      `Username is "${loginData.username}" and password is "${loginData.password}"`,
    );
  }
})

app.use(router.allowedMethods());
app.use(router.routes());

if (import.meta.main) {
  app.listen(
    {
        port: 5555,
      signal: controller.signal

    }
  )
}