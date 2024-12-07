import { Application, Router } from "@oak/oak";
import { deleteAccount, login, register, updateAccount } from "~middleware";
import checkAuth from "~crypto/auth";

const router = new Router();
const authRouter = new Router();
const app = new Application();
const controller = new AbortController();

router.get("/hello", (ctx) => {
  ctx.response.body = "Hello, World!";
});

router.get("/close", (ctx) => {
  controller.abort("User has invoked to close the connection");
  ctx.response.body = "Bye!";
});

router.post("/register", register);
router.post("/login", login);
authRouter.put("/auth/update", updateAccount);
authRouter.delete("/auth/delete", deleteAccount);

app.use(router.allowedMethods());
app.use(router.routes());
app.use(authRouter.allowedMethods());
app.use(checkAuth, authRouter.routes());

if (import.meta.main) {
  app.listen(
    {
      port: 5555,
      signal: controller.signal,
    },
  );
}