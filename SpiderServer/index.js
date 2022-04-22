import Koa from "koa";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import { PORT } from "./utils/config.js";

const app = new Koa();
app.use(cors());
app.use(bodyParser());

app.listen(PORT);
console.log("The Simple Http Server is Running in", `http://localhost:${PORT}`);
