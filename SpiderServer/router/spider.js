import Router from "koa-router";
import spiderQueue from "../spider/yitudao";

const router = new Router({ prefix: "/api/spider" });

const yitudao = "https://www.yitudao.com/meinv/";

router.post("/start", async (ctx) => {
  const { body } = ctx.request;
  switch (body.type) {
    case "yitudao":
      const spiderUrl = `${yitudao}${body.type}`;
      spiderQueue(spiderUrl, body.startPage);
    default:
      console.log("Bo");
  }
});
