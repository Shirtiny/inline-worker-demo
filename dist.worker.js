/*
 * @Author: Shirtiny
 * @Date: 2021-12-26 18:26:34
 * @LastEditTime: 2021-12-26 20:00:42
 * @Description:
 */

console.log("hhh");

const createWorkerUrl = (text) => {
  const blob = new Blob([text], { type: "text/javascript" });
  return URL.createObjectURL(blob);
};

const Product = () => {
  return new Worker(createWorkerUrl("/*\r\n * @Author: Shirtiny\r\n * @Date: 2021-12-26 18:16:26\r\n * @LastEditTime: 2021-12-26 20:02:14\r\n * @Description:\r\n */\r\nconsole.log(\"worker的代码执行\");\r\n\r\nself.onmessage = (e) => {\r\n  console.log(\"收到了一条消息 : \", e);\r\n  self.postMessage(\"好\")\r\n};"));
};

const worker = Product();

console.log(worker);
worker.postMessage("快干活！");
worker.addEventListener("message", (e) => {
  console.log(e);
});

export {};
