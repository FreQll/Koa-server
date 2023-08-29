const Koa = require("koa");
const Router = require("koa-router");
const Logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const User = require("./model/User");

const app = new Koa();
const router = new Router();

const PORT = 3000;

app.use(bodyParser());

router.get("/", async (ctx, next) => {
  const users = await User.find({});

  ctx.body = users;
});

router.post("/users", async (ctx, next) => {
  const user = await User.create({
    first_name: ctx.request.body.first_name,
    last_name: ctx.request.body.last_name,
    middle_name: ctx.request.body.middle_name,
    age: ctx.request.body.age,
    role: ctx.request.body.role,
    industry: ctx.request.body.industry,
  });

  ctx.body = user;
});

router.delete("/users/:id", async (ctx, next) => {
  const user = await User.findByIdAndDelete(ctx.params.id);

  ctx.body = user;
});

router.put("/users/:id", async (ctx, next) => {
  const user = await User.findByIdAndUpdate(ctx.params.id, {
    first_name: ctx.request.body.first_name,
    last_name: ctx.request.body.last_name,
    middle_name: ctx.request.body.middle_name,
    age: ctx.request.body.age,
    role: ctx.request.body.role,
    industry: ctx.request.body.industry,
  });
  ctx.body = user;
});

app.use(router.routes());
app.use(Logger());

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server running on port ${PORT}`);
});
